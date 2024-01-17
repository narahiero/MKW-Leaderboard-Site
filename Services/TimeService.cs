using System.Data.SqlClient;
using my_app.Models;
using my_app.Services.Interfaces;
using Dapper;
using Microsoft.Extensions.Configuration;
using my_app.Models.Enums;

namespace my_app.Services
{
    public class TimeService : ITimeService
    {
        private readonly IConfiguration _configuration;
        private readonly IPlayerService _playerService;

        public TimeService(IConfiguration configuration, IPlayerService playerService)
        {
            _configuration = configuration;
            _playerService = playerService;
        }

        private SqlConnection GetConnection()
        {
            return new SqlConnection(_configuration.GetSection("ConnectionStrings")["MKWLeaderboard"]);
        }

        public async Task<Time> Insert(Time time)
        {
            DateTime minDate = DateTime.Parse("2008-04-09");

            if(time.Date < minDate) {
                time.Date = null;
            }

            var oldTime = await GetExistingTime(time.PlayerId, time.Track, time.Glitch, time.Flap);
            await Obsolete(oldTime.Id);

            string sqlQuery = "INSERT INTO Times (PlayerId, Date, Track, Glitch, Flap, Minutes, Seconds, Milliseconds, Link, Ghost)" +
            "VALUES (@PlayerId, @Date, @Track, @Glitch, @Flap, @Minutes, @Seconds, @Milliseconds, @Link, @Ghost)";


            using var connection = GetConnection();
            return await GetById(await connection.ExecuteAsync(sqlQuery, time));
        }

        public async Task<Time> Edit(Time time)
        {
            string sqlQuery = "UPDATE Times SET Date = @Date, Glitch = @Glitch, Flap = @Flap, Minutes = @Minutes, Seconds = @Seconds, Milliseconds = @Milliseconds, Link = @Link, Ghost = @Ghost WHERE Id = @Id";

            using var connection = GetConnection();
            await connection.ExecuteAsync(sqlQuery, time);

            return await GetById(time.Id);
        }

        public async Task<Time> Obsolete(int id)
        {
            string sqlQuery = "UPDATE Times SET Obsoleted = 1 WHERE Id = @Id";

            using var connection = GetConnection();
            await connection.ExecuteAsync(sqlQuery, new { Id = id });

            return await GetById(id);
        }

        public async Task<Time> Delete(int id)
        {
            string sqlQuery = "UPDATE Times SET DeletedAt = @DeletedAt WHERE Id = @Id";

            using var connection = GetConnection();
            await connection.ExecuteAsync(sqlQuery, new { Id = id, DeletedAt = DateTime.Now });

            return await GetById(id);
        }

        public async Task<Time> GetById(int id)
        {
            string sqlQuery = "SELECT * FROM Times WHERE Id = @Id";

            using var connection = GetConnection();
            return await connection.QueryFirstOrDefaultAsync<Time>(sqlQuery, new { Id = id });
        }

        public async Task<IEnumerable<Time>> GetAll()
        {
            string sqlQuery = "SELECT * FROM Times WHERE DeletedAt IS NULL AND Obsoleted = 0";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery);
        }

        public async Task<Time> GetExistingTime(int playerId, Track track, bool glitch, bool flap)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Track = @Track AND Glitch = @Glitch AND Flap = @Flap AND Obsoleted = 0 AND DeletedAt IS NULL";

            using var connection = GetConnection();
            return await connection.QueryFirstOrDefaultAsync<Time>(sqlQuery, new { PlayerId = playerId, Track = track, Glitch = glitch, Flap = flap});
        }

        public async Task<IEnumerable<Time>> GetTimeHistory(int playerId, Track track, bool glitch, bool flap)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Track = @Track AND Glitch = @Glitch AND Flap = @Flap AND DeletedAt IS NULL ORDER BY Date DESC";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery, new { PlayerId = playerId, Track = track, Glitch = glitch, Flap = flap});
        }

        public async Task<IEnumerable<LeaderBoardTimeEntry>> GetCharts(TimeFilter filter)
        {
           //account for ties (max 5 ties, increase later if needed)
            var maxAmountOfPeople = filter.Page.EntriesPerPage + 5;
            int offset = filter.Page.PageNumber * filter.Page.EntriesPerPage - filter.Page.EntriesPerPage;

            var sqlQuery = "WITH RankedTimes AS (SELECT t.*, ROW_NUMBER() OVER (PARTITION BY t.PlayerId ORDER BY t.RunTime) AS row_num FROM Times t INNER JOIN Players p ON t.PlayerId = p.Id WHERE t.Track = @Track AND t.Flap = @Flap ";

            if(!filter.Glitch)
            {
                sqlQuery += "AND t.Glitch = 0 ";
            }

            if(filter.Countries.Any())
            {
                sqlQuery += "AND p.Country IN @Countries ";
            }

            sqlQuery += "AND t.Obsoleted = 0 AND t.DeletedAt IS NULL) SELECT * FROM RankedTimes WHERE row_num = 1 ORDER BY RunTime OFFSET @Offset ROWS FETCH NEXT @MaxAmountOfPeople ROWS ONLY";
            using var connection = GetConnection();
            var tops = await connection.QueryAsync<Time>(sqlQuery, new { filter.Track, filter.Flap, filter.Countries, Offset = offset, MaxAmountOfPeople = maxAmountOfPeople});

            var result = new List<LeaderBoardTimeEntry>();
            var times = new List<Time>();

            for(int i=0; i<filter.Page.EntriesPerPage; i++)
            {
                if(tops.Count() > i)
                {
                    times.Add(tops.AsList()[i]);
                }
            }

            for(int i=filter.Page.EntriesPerPage; i<maxAmountOfPeople; i++)
            {
                if(tops.Count() > i)
                {
                    if(times.Last().RunTime == tops.AsList()[i].RunTime)
                    {
                        times.Add(tops.AsList()[i]);
                    }
                }
            }

            foreach (var time in times)
            {
                result.Add(new LeaderBoardTimeEntry(time, await _playerService.GetById(time.PlayerId)));
            }

            return result;
        }

        public async Task<int> GetChartsQuantity(TimeFilter filter)
        {
            var sqlQuery = "WITH RankedTimes AS (SELECT t.*, ROW_NUMBER() OVER (PARTITION BY t.PlayerId ORDER BY t.RunTime) AS row_num FROM Times t INNER JOIN Players p ON t.PlayerId = p.Id WHERE t.Track = @Track AND t.Flap = @Flap ";

            if(!filter.Glitch)
            {
                sqlQuery += "AND t.Glitch = 0 ";
            }

            if(filter.Countries.Any())
            {
                sqlQuery += "AND p.Country IN @Countries ";
            }

            sqlQuery += "AND t.Obsoleted = 0 AND t.DeletedAt IS NULL) SELECT COUNT(*) FROM RankedTimes WHERE row_num = 1";
            using var connection = GetConnection();
            return await connection.QueryFirstOrDefaultAsync<int>(sqlQuery, new { filter.Track, filter.Flap, filter.Countries});
        }

        public async Task<IEnumerable<Time>> GetTimeSheet(TimeSheetFilter filter)
        {
            var sqlQuery = "SELECT * FROM ( SELECT *, ROW_NUMBER() OVER (PARTITION BY Track ORDER BY RunTime) AS Rank FROM ( SELECT *, ROW_NUMBER() OVER (PARTITION BY PlayerId, Track ORDER BY RunTime) AS row_num FROM Times WHERE Flap = @Flap AND Obsoleted = 0 AND DeletedAt IS NULL ";

            if(!filter.Glitch)
            {
                sqlQuery += "AND Glitch = 0";
            }

            sqlQuery += ") AS RankedTimes WHERE row_num = 1 ) AS FinalRankedTimes WHERE PlayerId = @PlayerId ORDER BY Track;";
            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery, new { filter.Flap, filter.PlayerId });
        }
    }
}
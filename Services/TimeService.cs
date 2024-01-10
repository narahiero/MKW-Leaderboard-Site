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

        public TimeService(IConfiguration configuration)
        {
            _configuration = configuration;
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

        public async Task<TimeSheet> GetFullTimeSheet(int playerId)
        {
            return new TimeSheet(playerId, await GetNGByPlayerId(playerId), await GetGByPlayerId(playerId), await GetNGFlapByPlayerId(playerId), await GetGFlapByPlayerId(playerId));
        }

        public async Task<TimeSheet> GetNGTimeSheet(int playerId)
        {
            return new TimeSheet(playerId, await GetNGByPlayerId(playerId), new List<Time>(), await GetNGFlapByPlayerId(playerId), new List<Time>());
        }

        public async Task<TimeSheet> GetGTimeSheet(int playerId)
        {
            return new TimeSheet(playerId, new List<Time>(), await GetGByPlayerId(playerId), new List<Time>(), await GetGFlapByPlayerId(playerId));
        }

        public async Task<TimeSheet> Get3LapTimeSheet(int playerId)
        {
            return new TimeSheet(playerId, await GetNGByPlayerId(playerId), await GetGByPlayerId(playerId), new List<Time>(), new List<Time>());
        }

        public async Task<TimeSheet> GetFlapTimeSheet(int playerId)
        {
            return new TimeSheet(playerId, new List<Time>(), new List<Time>(), await GetNGFlapByPlayerId(playerId), await GetGFlapByPlayerId(playerId));
        }

        public async Task<IEnumerable<Time>> GetNGByPlayerId(int playerId)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Glitch = 0 AND Flap = 0 AND Obsoleted = 0";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery, new { PlayerId = playerId });
        }

        public async Task<IEnumerable<Time>> GetAllByPlayerId(int playerId)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Glitch = 0 AND Flap = 0 AND Obsoleted = 0";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery, new { PlayerId = playerId });
        }

        public async Task<IEnumerable<Time>> GetGByPlayerId(int playerId)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Glitch = 1 AND Flap = 0 AND Obsoleted = 0";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery, new { PlayerId = playerId });
        }

        public async Task<IEnumerable<Time>> GetNGFlapByPlayerId(int playerId)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Glitch = 0 AND Flap = 1 AND Obsoleted = 0";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery, new { PlayerId = playerId });
        }

        public async Task<IEnumerable<Time>> GetGFlapByPlayerId(int playerId)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Glitch = 1 AND Flap = 1 AND Obsoleted = 0";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery, new { PlayerId = playerId });
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
            return await connection.QueryFirstOrDefaultAsync<Time>(sqlQuery);
        }

        public async Task<IEnumerable<Time>> GetTimeHistory(int playerId, Track track, bool glitch, bool flap)
        {
            string sqlQuery = "SELECT * FROM Times WHERE PlayerId = @PlayerId AND Track = @Track AND Glitch = @Glitch AND Flap = @Flap AND DeletedAt IS NULL ORDER BY Date DESC";

            using var connection = GetConnection();
            return await connection.QueryAsync<Time>(sqlQuery);
        }
    }
}
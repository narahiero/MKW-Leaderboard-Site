using System.Data.SqlClient;
using my_app.Models;
using my_app.Services.Interfaces;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace my_app.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly IConfiguration _configuration;

        public PlayerService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private SqlConnection GetConnection()
        {
            return new SqlConnection(_configuration.GetSection("ConnectionStrings")["MKWLeaderboard"]);
        }

        public async Task<Player> Insert(Player player)
        {
            string sqlQuery = "INSERT INTO Players (Name, Country, Town, OtherInfo, Discord, PPProofStatus)" +
            "VALUES (@Name, @Country, @Town, @OtherInfo, Discord, @PPProofStatus); SELECT CAST(SCOPE_IDENTITY() as int)";

            using var connection = GetConnection();
            return await GetById(await connection.QuerySingleAsync<int>(sqlQuery, player));
        }

        public async Task<Player> Edit(Player player)
        {
            string sqlQuery = "UPDATE Players SET Name = @Name, Country = @Country, Town = @Town, OtherInfo = @OtherInfo, Discord = @Discord, PPProofStatus = @PPProofStatus WHERE Id = @Id";

            using var connection = GetConnection();
            await connection.ExecuteAsync(sqlQuery, player);

            return await GetById(player.Id);
        }

        public async Task<Player> Delete(int id)
        {
            string sqlQuery = "UPDATE Players SET DeletedAt = @DeletedAt WHERE Id = @Id";

            using var connection = GetConnection();
            await connection.ExecuteAsync(sqlQuery, new { Id = id, DeletedAt = DateTime.Now });

            return await GetById(id);
        }

        public async Task<Player> GetById(int id)
        {
            string sqlQuery = "SELECT * FROM Players WHERE Id = @Id";

            using var connection = GetConnection();
            return await connection.QueryFirstOrDefaultAsync<Player>(sqlQuery, new { Id = id });
        }

        public async Task<IEnumerable<Player>> GetAll()
        {
            string sqlQuery = "SELECT * FROM Players WHERE DeletedAt IS NULL ORDER BY Name";

            using var connection = GetConnection();
            return await connection.QueryAsync<Player>(sqlQuery);
        }
    }
}
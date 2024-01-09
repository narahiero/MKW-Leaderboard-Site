using Microsoft.EntityFrameworkCore;
using mkw_leaderboard.Models;


namespace mkw_leaderboard.Services.Database
{
    public class MKWLeaderboardContext : DbContext
    {
        public MKWLeaderboardContext() : base()
        {
            Players = Set<Player>();
            Times = Set<Time>();
        }
        public MKWLeaderboardContext(DbContextOptions<MKWLeaderboardContext> options) : base(options)
        {
            Players = Set<Player>();
            Times = Set<Time>();
        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Time> Times { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using my_app.Models;


namespace my_app.Services.Database
{
    public class MKWLeaderboardContext : DbContext
    {
        public MKWLeaderboardContext() : base()
        {

        }
        public MKWLeaderboardContext(DbContextOptions<MKWLeaderboardContext> options) : base(options)
        {

        }

        public DbSet<Player> Players { get; set; }
        public DbSet<Time> Times { get; set; }
        public DbSet<CTGPProfileLink> CTGPProfileLinks { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using mkw_leaderboard.Models.Enums;

namespace mkw_leaderboard.Models
{
    public class Player
    {
        public Player() {
            Name = "";
            CTGPProfiles = new List<string>();
        }

        public Player(string name, Country country, string town, string otherInfo, List<string> ctgpProfiles, string discord, string ppProofStatus) {
            Name = name;
            Country = country;
            Town = town;
            OtherInfo = otherInfo;
            CTGPProfiles = ctgpProfiles;
            Discord = discord;
            PPProofStatus = ppProofStatus;
        }


        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public Country Country { get; set; }

        public string? Town { get; set; }

        public string? OtherInfo { get; set; }

        public List<string> CTGPProfiles { get; set; }

        public string? Discord { get; set; }

        public string? PPProofStatus { get; set; }
    }
}
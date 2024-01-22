using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class LeaderboardChartRow
    {

        public LeaderboardChartRow() {
            Name = "";
        }

        public LeaderboardChartRow(int playerId, string name, Country country, int tally) {
            PlayerId = playerId;
            Name = name;
            Country = country;
            Tally = tally;
        }

        public int PlayerId  { get; set; }
        public string Name  { get; set; }
        public Country Country  { get; set; }
        public int Tally { get; set; }
    }
}
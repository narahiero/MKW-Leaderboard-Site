using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class LeaderboardChartFilter
    {

        public LeaderboardChartFilter(bool glitch, bool threeLap, bool flap, IEnumerable<Country> countries) {
            Glitch = glitch;
            ThreeLap = threeLap;
            Flap = flap;
            Countries = countries;
        }
        public bool Glitch { get; set; }
        public bool ThreeLap { get; set; }
        public bool Flap { get; set; }
        public IEnumerable<Country> Countries { get; set; }
    }
}
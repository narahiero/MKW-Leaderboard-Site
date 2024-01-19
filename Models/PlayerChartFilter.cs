using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class PlayerChartFilter
    {

        public PlayerChartFilter(bool glitch, bool threeLap, bool flap, bool all) {
            Glitch = glitch;
            ThreeLap = threeLap;
            Flap = flap;
            All = all;
        }
        public bool Glitch { get; set; }
        public bool ThreeLap { get; set; }
        public bool Flap { get; set; }
        public bool All { get; set; }
    }
}
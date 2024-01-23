using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class WRFilter
    {

        public WRFilter(bool glitch, bool flap, IEnumerable<Country> countries) {
            Glitch = glitch;
            Flap = flap;
            Countries = countries;
        }
        public bool Glitch { get; set; }
        public bool Flap { get; set; }
        public IEnumerable<Country> Countries { get; set; }
    }
}
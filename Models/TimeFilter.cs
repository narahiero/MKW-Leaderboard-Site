using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class TimeFilter
    {

        public TimeFilter(Track track, bool glitch, bool flap, IEnumerable<Country> countries, Page page) {
            Track = track;
            Glitch = glitch;
            Flap = flap;
            Countries = countries;
            Page = page;
        }

        public Track Track { get; set; }
        public bool Glitch  { get; set; }
        public bool Flap  { get; set; }
        public IEnumerable<Country> Countries { get; set; }
        public Page Page { get; set; }
    }
}
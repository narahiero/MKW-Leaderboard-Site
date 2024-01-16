using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class TimeSheetFilter
    {

        public TimeSheetFilter(int playerId, bool glitch, bool flap) {
            PlayerId = playerId;
            Glitch = glitch;
            Flap = flap;
        }
        public int PlayerId  { get; set; }
        public bool Glitch  { get; set; }
        public bool Flap  { get; set; }
    }
}
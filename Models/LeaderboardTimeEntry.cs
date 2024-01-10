using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class LeaderBoardTimeEntry
    {

        public LeaderBoardTimeEntry(Time time, Player player) {
            Time = time;
            Player = player;
        }

        public Time Time { get; set; }
        public Player Player { get; set; }
    }
}
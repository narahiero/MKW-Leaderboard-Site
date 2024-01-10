using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class Digits
    {
        public Digits(int minutes, int seconds, int milliseconds) {
            Minutes = minutes;
            Seconds = seconds;
            Milliseconds = milliseconds;
        }

        public int Minutes { get; set; }

        public int Seconds { get; set; }

        public int Milliseconds { get; set; }
    }
}
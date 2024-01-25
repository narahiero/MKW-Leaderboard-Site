using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class TimeSheet
    {

        public TimeSheet(IEnumerable<Time> times, double af, long totalTime, double prsr) {
            Times = times;
            AF = af;
            TotalTime = totalTime;
            PRSR = prsr;
        }
        public IEnumerable<Time> Times { get; set; }
        public double AF { get; set; }
        public long TotalTime { get; set; }
        public double PRSR { get; set; }
    }
}
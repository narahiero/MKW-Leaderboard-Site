using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class TotalTimeChartRow
    {

        public TotalTimeChartRow() {
            Name = "";
        }

        public TotalTimeChartRow(int playerId, string name, Country country, long totalTime) {
            PlayerId = playerId;
            Name = name;
            Country = country;
            TotalTime = totalTime;
        }

        public int PlayerId  { get; set; }
        public string Name  { get; set; }
        public Country Country  { get; set; }
        public long TotalTime { get; set; }
    }
}
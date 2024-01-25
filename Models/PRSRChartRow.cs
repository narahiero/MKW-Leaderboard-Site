using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class PRSRChartRow
    {

        public PRSRChartRow() {
            Name = "";
        }

        public PRSRChartRow(int playerId, string name, Country country, double prsr) {
            PlayerId = playerId;
            Name = name;
            Country = country;
            PRSR = prsr;
        }

        public int PlayerId  { get; set; }
        public string Name  { get; set; }
        public Country Country  { get; set; }
        public double PRSR { get; set; }
    }
}
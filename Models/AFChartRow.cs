using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class AFChartRow
    {

        public AFChartRow(int playerId, string name, Country country, double af) {
            PlayerId = playerId;
            Name = name;
            Country = country;
            AF = af;
        }
        public int PlayerId  { get; set; }
        public string Name  { get; set; }
        public Country Country  { get; set; }
        public double AF { get; set; }
    }
}
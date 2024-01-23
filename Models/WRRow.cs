using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class WRRow
    {

        public WRRow() {
            Name = "";
        }

        public WRRow(int playerId, string name, Country country, Track track, int runTime, string link, string ghost) {
            PlayerId = playerId;
            Name = name;
            Country = country;
            Track = track;
            RunTime = runTime;
            Link = link;
            Ghost = ghost;
        }

        public int PlayerId  { get; set; }
        public string Name  { get; set; }
        public Country Country  { get; set; }
        public Track Track  { get; set; }
        public int RunTime { get; set; }
        public string Link { get; set; }
        public string Ghost { get; set; }
    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class Time
    {

        public Time() {

        }

        public Time(DateTime date, int playerId, Track track, bool glitch, bool flap, int runTime, string link, string ghost, string rank) {
            Date = date;
            PlayerId = playerId;
            Track = track;
            Glitch = glitch;
            Flap = flap;
            RunTime = runTime;
            Link = link;
            Ghost = ghost;
            Rank = rank;
        }

        public int Id { get; set; }

        public DateTime? Date { get; set; }

        [Required]
        public int PlayerId { get; set; }

        [Required]
        public Track Track { get; set; }

        [Required]
        public bool Glitch { get; set; }

        [Required]
        public bool Flap { get; set; }

        [Required]
        public int RunTime { get; set; }

        public string? Link { get; set; }

        public string? Ghost { get; set; }

        public bool Obsoleted { get; set; }

        public DateTime? DeletedAt { get; set; }

        [NotMapped]
        public string Rank { get; set; }
    }
}
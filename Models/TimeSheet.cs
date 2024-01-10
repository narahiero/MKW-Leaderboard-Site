using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class TimeSheet
    {

        public TimeSheet(int playerId, IEnumerable<Time> ng3laps, IEnumerable<Time> g3laps, IEnumerable<Time> ngflaps, IEnumerable<Time> gflaps) {
            PlayerId = playerId;
            NG3Laps = ng3laps;
            G3Laps = g3laps;
            NGFlaps = ngflaps;
            GFlaps = gflaps;
        }

        int PlayerId { get; set; }
        IEnumerable<Time> NG3Laps { get; set; }
        IEnumerable<Time> G3Laps { get; set; }
        IEnumerable<Time> NGFlaps { get; set; }
        IEnumerable<Time> GFlaps { get; set; }
    }
}
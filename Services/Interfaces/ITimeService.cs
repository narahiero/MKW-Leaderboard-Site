using my_app.Models;
using my_app.Models.Enums;

namespace my_app.Services.Interfaces
{
    public interface ITimeService
    {
        Task<Time> Insert(Time time);
        Task<Time> GetById(int id);
        Task<Time> Edit(Time time);
        Task<Time> Delete(int id);
        Task<TimeSheet> GetFullTimeSheet(int playerId);
        Task<TimeSheet> GetNGTimeSheet(int playerId);
        Task<TimeSheet> GetGTimeSheet(int playerId);
        Task<TimeSheet> Get3LapTimeSheet(int playerId);
        Task<TimeSheet> GetFlapTimeSheet(int playerId);
        Task<IEnumerable<Time>> GetAllByPlayerId(int playerId);
        Task<IEnumerable<Time>> GetGByPlayerId(int playerId);
        Task<IEnumerable<Time>> GetNGByPlayerId(int playerId);
        Task<IEnumerable<Time>> GetGFlapByPlayerId(int playerId);
        Task<IEnumerable<Time>> GetNGFlapByPlayerId(int playerId);
        Task<IEnumerable<Time>> GetAll();
        Task<IEnumerable<Time>> GetTimeHistory(int playerId, Track track, bool glitch, bool flap);
        Task<IEnumerable<LeaderBoardTimeEntry>> GetTops(Track track, bool glitch, bool flap, int firstPosition, int lastPosition);
    }
}
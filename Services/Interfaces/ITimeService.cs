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
        Task<IEnumerable<Time>> GetAll();
        Task<IEnumerable<Time>> GetTimeHistory(int playerId, Track track, bool glitch, bool flap);
        Task<IEnumerable<LeaderBoardTimeEntry>> GetCharts(TimeFilter filter);
        Task<int> GetChartsQuantity(TimeFilter filter);
        Task<TimeSheet> GetTimeSheet(TimeSheetFilter filter);
        Task<double> GetTotalAF(TimeSheetFilter filter);
        Task<long> GetTotalTotalTime(TimeSheetFilter filter);
        Task<IEnumerable<AFChartRow>> GetAFCharts(PlayerChartFilter filter);
        Task<IEnumerable<TotalTimeChartRow>> GetTotalTimeCharts(PlayerChartFilter filter);
        Task<IEnumerable<LeaderboardChartRow>> GetLeaderboardCharts(LeaderboardChartFilter filter);
        Task<IEnumerable<LeaderboardChartRow>> GetRecordHoldersChart(LeaderboardChartFilter filter);
        Task<IEnumerable<WRRow>> GetWorldRecords(WRFilter filter);
    }
}
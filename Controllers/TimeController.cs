using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using my_app.Services.Interfaces;
using my_app.Models;
using Microsoft.Extensions.Configuration;
using my_app.Models.Enums;

namespace my_app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TimeController : ApiController
    {
        private readonly ITimeService _timeService;

        public TimeController(ITimeService timeService) : base()
        {
            _timeService = timeService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Time>> GetTime(int id)
        {
            try
            {
                var time = await _timeService.GetById(id);

                if(time == null)
                {
                    return NotFound();
                }

                return Ok(time);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPost("top10")]
        public async Task<ActionResult<IEnumerable<LeaderBoardTimeEntry>>> GetTop10([FromBody] TimeFilter filter)
        {
            try
            {
                var top10 = await _timeService.GetCharts(filter);

                if(top10 == null)
                {
                    return NotFound();
                }

                return Ok(top10);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPost("track-charts")]
        public async Task<ActionResult<IEnumerable<LeaderBoardTimeEntry>>> GetTrackCharts([FromBody] TimeFilter filter)
        {
            try
            {
                var charts = await _timeService.GetCharts(filter);

                if(charts == null)
                {
                    return NotFound();
                }

                return Ok(charts);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPost("track-charts-quantity")]
        public async Task<ActionResult<IEnumerable<LeaderBoardTimeEntry>>> GetTrackChartsQuantity([FromBody] TimeFilter filter)
        {
            try
            {
                return Ok(await _timeService.GetChartsQuantity(filter));
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPost("timesheet")]
        public async Task<ActionResult<IEnumerable<Time>>> GetTimeSheet(TimeSheetFilter filter)
        {
            try
            {
                var time = await _timeService.GetTimeSheet(filter);

                if(time == null)
                {
                    return NotFound();
                }

                return Ok(time);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Time>>> GetAll()
        {
            try
            {
                return Ok(await _timeService.GetAll());
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpGet("history/player/{playerId}/track/{track}/glitch/{glitch}/flap/{flap}")]
        public async Task<ActionResult<IEnumerable<Time>>> GetTimeHistory(int playerId, Track track, bool glitch, bool flap)
        {
            try
            {
                return Ok(await _timeService.GetTimeHistory(playerId, track, glitch, flap));
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPost]
        public async Task<ActionResult<Time>> InsertTime(Time time)
        {
            try
            {
                return Ok(await _timeService.Insert(time));
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Time>> Edit(int id, Time time)
        {
            try
            {
                time.Id = id;
                var editedTime = await _timeService.Edit(time);

                if(editedTime == null)
                {
                    return NotFound();
                }

                return Ok(editedTime);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Time>> Delete(int id)
        {
            try
            {
                var deletedTime = await _timeService.Delete(id);

                if(deletedTime == null)
                {
                    return NotFound();
                }

                return deletedTime;
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }
    }
}
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

        [HttpGet("timesheet/{playerId}")]
        public async Task<ActionResult<TimeSheet>> GetFullTimeSheet(int playerId)
        {
            try
            {
                var time = await _timeService.GetFullTimeSheet(playerId);

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

        [HttpGet("timesheet/ng/{playerId}")]
        public async Task<ActionResult<TimeSheet>> GetNGTimeSheet(int playerId)
        {
            try
            {
                var time = await _timeService.GetNGTimeSheet(playerId);

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

        [HttpGet("timesheet/g/{playerId}")]
        public async Task<ActionResult<TimeSheet>> GetGTimeSheet(int playerId)
        {
            try
            {
                var time = await _timeService.GetGTimeSheet(playerId);

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

        [HttpGet("timesheet/3lap/{playerId}")]
        public async Task<ActionResult<TimeSheet>> Get3LapTimeSheet(int playerId)
        {
            try
            {
                var time = await _timeService.Get3LapTimeSheet(playerId);

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

        [HttpGet("timesheet/flap/{playerId}")]
        public async Task<ActionResult<TimeSheet>> GetFlapTimeSheet(int playerId)
        {
            try
            {
                var time = await _timeService.GetFlapTimeSheet(playerId);

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
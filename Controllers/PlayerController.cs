using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using my_app.Services.Interfaces;
using my_app.Models;
using Microsoft.Extensions.Configuration;

namespace my_app.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlayerController : ApiController
    {
        private readonly IPlayerService _playerService;

        public PlayerController(IPlayerService playerService) : base()
        {
            _playerService = playerService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> GetPlayer(int id)
        {
            try
            {
                var player = await _playerService.GetById(id);

                if(player == null)
                {
                    return NotFound();
                }

                return Ok(player);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Player>>> GetAll()
        {
            try
            {
                return Ok(await _playerService.GetAll());
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPost]
        public async Task<ActionResult<Player>> InsertPlayer(Player player)
        {
            try
            {
                return Ok(await _playerService.Insert(player));
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Player>> Edit(int id, Player player)
        {
            try
            {
                player.Id = id;
                var editedPlayer = await _playerService.Edit(player);

                if(editedPlayer == null)
                {
                    return NotFound();
                }

                return Ok(editedPlayer);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Player>> Delete(int id)
        {
            try
            {
                var deletedPlayer = await _playerService.Delete(id);

                if(deletedPlayer == null)
                {
                    return NotFound();
                }

                return deletedPlayer;
            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);

                return InternalServerError();
            }
        }
    }
}
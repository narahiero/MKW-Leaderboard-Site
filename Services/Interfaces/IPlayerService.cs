using my_app.Models;

namespace my_app.Services.Interfaces
{
    public interface IPlayerService
    {
        Task<Player> Insert(Player player);
        Task<Player> GetById(int id);
        Task<Player> Edit(Player player);
        Task<Player> Delete(int id);
        Task<IEnumerable<Player>> GetAll();
    }
}
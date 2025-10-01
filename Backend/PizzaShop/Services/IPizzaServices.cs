using PizzaShop.Models;

namespace PizzaShop.Services
{
    public interface IPizzaServices
    {
        Task<IEnumerable<Pizza>> GetAllAsync();

        Task<Pizza?> GetByIdAsync(int id);

        Task<Pizza> AddAsync(Pizza pizza);

        Task<Pizza> UpdateAsync(Pizza pizza);

        Task<bool> DeleteAsync(int id);


    }
}

using PizzaShop.Models;

namespace PizzaShop.Services
{
    public class PizzaService:IPizzaServices
    {

        private readonly IPizzaRepository _pizzaRepository;
        public PizzaService(IPizzaRepository pizzaRepository)
        {
            _pizzaRepository = pizzaRepository;
        }

        public async Task<IEnumerable<Pizza>> GetAllAsync()
        {
            return _pizzaRepository.AllPizza;
        }

        public async Task<Pizza?> GetByIdAsync(int id)
        {
            return _pizzaRepository.GetPizzaById(id);
        }
        public async Task<Pizza> AddAsync(Pizza pizza)

        { if (pizza.Rating>10 || pizza.Rating < 0)
            {
                throw new ArgumentException("Rating must be inside rangelimit(0-10)");
            }
            return await _pizzaRepository.AddPizzaAsync(pizza);
        }
        public async Task<Pizza?> UpdateAsync(Pizza pizza)
        {
            return await _pizzaRepository.UpdatePizzaAsync(pizza);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _pizzaRepository.DeletePizzaAsync(id);
        }



    }
}

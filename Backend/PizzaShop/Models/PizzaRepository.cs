using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks; // Required for Include and EF Core methods

namespace PizzaShop.Models
{

   

    public class PizzaRepository : IPizzaRepository
    {

        public readonly PizzaShopDbContext _pizzaShopDbContext;
        public PizzaRepository(PizzaShopDbContext pizzaShopDbContext)
        {
            _pizzaShopDbContext = pizzaShopDbContext;
        }









        public IEnumerable<Pizza> AllPizza => _pizzaShopDbContext.Pizzas.Include(p => p.Category);
        public Pizza? GetPizzaById(int pizzaId) => _pizzaShopDbContext.Pizzas.Include(p => p.Category).FirstOrDefault(p => p.PizzaId == pizzaId);

        public async Task<Pizza> AddPizzaAsync(Pizza pizza)
        {
            _pizzaShopDbContext.Pizzas.Add(pizza);
            await _pizzaShopDbContext.SaveChangesAsync();
            return pizza;

        }

        public async Task<Pizza?> UpdatePizzaAsync(Pizza pizza)
        {
            var existing = await _pizzaShopDbContext.Pizzas.AsNoTracking().AnyAsync(p=>p.PizzaId==pizza.PizzaId);
            if (existing == null) return null;
            _pizzaShopDbContext.Entry(pizza).State = EntityState.Modified;
            await _pizzaShopDbContext.SaveChangesAsync();
            return pizza;
        }



        public async Task<bool> DeletePizzaAsync(int pizzaId)
        {

            var pizza = await _pizzaShopDbContext.Pizzas.FindAsync(pizzaId);
            if (pizza == null)
            {
                return false;
            }
            _pizzaShopDbContext.Pizzas.Remove(pizza);
            await _pizzaShopDbContext.SaveChangesAsync();
            return true;

        }




        public IEnumerable<Pizza> SearchPizza(string searchQuery)
        {
            return _pizzaShopDbContext.Pizzas.Include(p => p.Category).Where(p => p.Title.Contains(searchQuery)).ToList();
        }
    }
}

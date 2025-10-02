namespace Pizza.Data.Repositories
{
   public class PizzaRepository: IPizzaRepository
    {
        public readonly PizzaShopDBContext _pizzaShopDbContext;
        public PizzaRepository(PizzaShopDBContext pizzaShopDbContext)
        {
            _pizzaShopDbContext = pizzaShopDbContext;
        }
        public IEnumerable<PizzaEntity> AllPizza => _pizzaShopDbContext.Pizzas.Include(p => p.Category);
        public PizzaEntity? GetPizzaById(int pizzaId) => _pizzaShopDbContext.Pizzas.Include(p => p.Category).FirstOrDefault(p => p.PizzaId == pizzaId);

        public async Task<PizzaEntity> AddPizzaAsync(PizzaEntity pizza)
        {
            _pizzaShopDbContext.Pizzas.Add(pizza);
            await _pizzaShopDbContext.SaveChangesAsync();
            return pizza;

        }
           public async Task<PizzaEntity?> UpdatePizzaAsync(PizzaEntity pizza)
        {
            var existing = await _pizzaShopDbContext.Pizzas.AsNoTracking().AnyAsync(p => p.PizzaId == pizza.PizzaId);
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
        public IEnumerable<PizzaEntity> SearchPizza(string searchQuery)
        {
            return _pizzaShopDbContext.Pizzas.Include(p => p.Category).Where(p => p.Title.Contains(searchQuery)).ToList();
        }
    }
}







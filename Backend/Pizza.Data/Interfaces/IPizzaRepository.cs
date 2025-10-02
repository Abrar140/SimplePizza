namespace Pizza.Data.Interfaces
{
    public interface IPizzaRepository
    {
        //IEnumerable<Pizza> AllPizza { get; }
        //Pizza? GetPizzaById(int pizzaId);

        IEnumerable<PizzaEntity> AllPizza { get; }
        PizzaEntity? GetPizzaById(int pizzaId);
        IEnumerable<PizzaEntity> SearchPizza(string searchQuery);
        Task<PizzaEntity> AddPizzaAsync(PizzaEntity pizza);
        Task<PizzaEntity?> UpdatePizzaAsync(PizzaEntity pizza);
        Task<bool> DeletePizzaAsync(int pizzaId);
    }
}

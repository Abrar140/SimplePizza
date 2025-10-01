namespace PizzaShop.Models
{
    public interface IPizzaRepository
    {
        //IEnumerable<Pizza> AllPizza { get; }

        //Pizza? GetPizzaById(int pizzaId);


        IEnumerable<Pizza> AllPizza { get; }
        Pizza? GetPizzaById(int pizzaId);
        IEnumerable<Pizza> SearchPizza(string searchQuery);

        Task<Pizza> AddPizzaAsync(Pizza pizza);
        Task<Pizza?> UpdatePizzaAsync(Pizza pizza);
        Task<bool> DeletePizzaAsync(int pizzaId);




    }



}

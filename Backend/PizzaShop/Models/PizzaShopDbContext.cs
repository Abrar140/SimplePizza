using Microsoft.EntityFrameworkCore;
namespace PizzaShop.Models
{
    public class PizzaShopDbContext: DbContext
    {
        public PizzaShopDbContext(DbContextOptions<PizzaShopDbContext> options) : base(options) { }

        public DbSet<Pizza> Pizzas { get; set; } = default!;
        public DbSet <Category> Categories { get; set; }=default!;
    }
}

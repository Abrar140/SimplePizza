namespace Pizza.Data
{
    public class PizzaShopDBContext : DbContext
    {
        public PizzaShopDBContext(DbContextOptions<PizzaShopDBContext> options) : base(options) { }

        public DbSet<PizzaEntity> Pizzas { get; set; } = default!;
        public DbSet<CategoryEntity> Categories { get; set; } = default!;
    }
}
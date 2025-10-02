namespace Pizza.Data.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {

        public readonly PizzaShopDBContext _pizzashopDbContext;

        public CategoryRepository(PizzaShopDBContext pizzaShopDbContext)
        {
            _pizzashopDbContext = pizzaShopDbContext;
        }
        public IEnumerable<CategoryEntity> AllCategories => _pizzashopDbContext.Categories.OrderBy(p => p.CategoryName);
    }
}

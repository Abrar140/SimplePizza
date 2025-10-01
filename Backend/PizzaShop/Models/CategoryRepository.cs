namespace PizzaShop.Models
{
    public class CategoryRepository: ICategoryRepository
    {
        public readonly PizzaShopDbContext _pizzashopDbContext;

        public CategoryRepository(PizzaShopDbContext pizzaShopDbContext)
        {
            _pizzashopDbContext = pizzaShopDbContext;
        }
       public  IEnumerable<Category> AllCategories => _pizzashopDbContext.Categories.OrderBy(p => p.CategoryName);

    }
}

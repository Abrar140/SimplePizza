namespace Pizza.Data
{

    public class DbInitialization
    {
        public static void Seed(PizzaShopDBContext context)
        {
            //using var serviceScope = app.ApplicationServices.CreateScope();
            //var context = serviceScope.ServiceProvider.GetRequiredService<PizzaShopDBContext>();

            // Ensure database is created
            context.Database.EnsureCreated();

            // Seed Categories
            if (!context.Categories.Any())
            {
                context.Categories.AddRange(Categories.Select(c => c.Value));
                context.SaveChanges(); // Save categories first to get their IDs
            }

            // Seed Pizzas
            if (!context.Pizzas.Any())
            {
                context.Pizzas.AddRange(
                    new PizzaEntity
                    {
                        Title = "Pepperoni Fresh with Pepper",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                        Sizes = new List<string> { "26", "30", "40" },
                        Price = new List<int> { 803 },
                        Category = Categories["Meat Lovers"],
                        Rating = 4
                    },
                    new PizzaEntity
                    {
                        Title = "Cheese Pizza",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                        Sizes = new List<string> { "26", "40" },
                        Price = new List<int> { 245 },
                        Category = Categories["Meat Lovers"],
                        Rating = 6
                    },
                    new PizzaEntity
                    {
                        Title = "BBQ Chicken",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                        Sizes = new List<string> { "26", "40" },
                        Price = new List<int> { 295 },
                        Category = Categories["Chicken"],
                        Rating = 4
                    },
                    new PizzaEntity
                    {
                        Title = "Sweet and Sour Chicken",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg",
                        Sizes = new List<string> { "26", "30", "40" },
                        Price = new List<int> { 275 },
                        Category = Categories["Chicken"],
                        Rating = 2
                    },
                    new PizzaEntity
                    {
                        Title = "Cheeseburger Pizza",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg",
                        Sizes = new List<string> { "26", "30", "40" },
                        Price = new List<int> { 415 },
                        Category = Categories["Classics and Veggie"],
                        Rating = 8
                    }
                // Add the rest of your pizzas similarly...
                );

                context.SaveChanges();
            }
        }

        // Categories dictionary
        private static Dictionary<string, CategoryEntity>? categories;

        public static Dictionary<string, CategoryEntity> Categories
        {
            get
            {
                if (categories == null)
                {
                    var categoriesList = new CategoryEntity[]
                    {
                        new CategoryEntity { CategoryName = "Meat Lovers" },
                        new CategoryEntity { CategoryName = "Chicken" },
                        new CategoryEntity { CategoryName = "Classics and Veggie" }
                    };

                    categories = new Dictionary<string, CategoryEntity>();
                    foreach (var category in categoriesList)
                    {
                        categories.Add(category.CategoryName, category);
                    }
                }

                return categories;
            }
        }
    }
}









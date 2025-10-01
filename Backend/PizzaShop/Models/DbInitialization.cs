using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using System.Linq;

namespace PizzaShop.Models
{
    public class DbInitialization
    {
        public static void Seed(IApplicationBuilder applicationBuilder)
        {
            using var serviceScope = applicationBuilder.ApplicationServices.CreateScope();
            var context = serviceScope.ServiceProvider.GetRequiredService<PizzaShopDbContext>();

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
                    new Pizza
                    {
                        Title = "Pepperoni Fresh with Pepper",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                        Sizes = new List<string> { "26", "30", "40" },
                        Price = new List<decimal> { 803 },
                        Category = Categories["Meat Lovers"],
                        Rating = 4
                    },
                    new Pizza
                    {
                        Title = "Cheese Pizza",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                        Sizes = new List<string> { "26", "40" },
                        Price = new List<decimal> { 245 },
                        Category = Categories["Meat Lovers"],
                        Rating = 6
                    },
                    new Pizza
                    {
                        Title = "BBQ Chicken",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
                        Sizes = new List<string> { "26", "40" },
                        Price = new List<decimal> { 295 },
                        Category = Categories["Chicken"],
                        Rating = 4
                    },
                    new Pizza
                    {
                        Title = "Sweet and Sour Chicken",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg",
                        Sizes = new List<string> { "26", "30", "40" },
                        Price = new List<decimal> { 275 },
                        Category = Categories["Chicken"],
                        Rating = 2
                    },
                    new Pizza
                    {
                        Title = "Cheeseburger Pizza",
                        ImageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pepperoni_pizza.jpg",
                        Sizes = new List<string> { "26", "30", "40" },
                        Price = new List<decimal> { 415 },
                        Category = Categories["Classics and Veggie"],
                        Rating = 8
                    }
                    // Add the rest of your pizzas similarly...
                );

                context.SaveChanges();
            }
        }

        // Categories dictionary
        private static Dictionary<string, Category>? categories;

        public static Dictionary<string, Category> Categories
        {
            get
            {
                if (categories == null)
                {
                    var categoriesList = new Category[]
                    {
                        new Category { CategoryName = "Meat Lovers" },
                        new Category { CategoryName = "Chicken" },
                        new Category { CategoryName = "Classics and Veggie" }
                    };

                    categories = new Dictionary<string, Category>();
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

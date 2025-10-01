namespace PizzaShop.Models
{
    public class Pizza
    {

        public int PizzaId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
        public decimal Rating { get; set; }
        public List<string> Sizes { get; set; } = new();
        public List<decimal> Price { get; set; } = new();
        public int CategoryId { get; set; }
        public Category? Category { get; set; } = default!;
    }
}

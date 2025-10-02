namespace Pizza.Data.Entities
{
    public class PizzaEntity
    {
        [Key]

        public int PizzaId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
        public int Rating { get; set; }
        public List<string> Sizes { get; set; } = new();
        public List<int> Price { get; set; } = new();
        public int CategoryId { get; set; }
        public CategoryEntity? Category { get; set; } = default!;
    }
}

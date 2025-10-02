namespace Pizza.Common.Dtos
{
    public class PizzaDto
    {
        public int PizzaId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? ImageUrl { get; set; }
        public int Rating { get; set; }
        public List<string> Sizes { get; set; } = new();
        public List<int> Price { get; set; } = new();

        // Instead of full CategoryEntity, just send id & name
        public int CategoryId { get; set; }
        public string? CategoryName { get; set; }
    }
}

namespace Pizza.Common.Dtos
{
    public class CategoryDto
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string Description { get; set; }
        public List<PizzaSummaryDto>? Pizzas { get; set; }

    }

    public class PizzaSummaryDto
    {
        public int PizzaId { get; set; }
        public string Title { get; set; } = string.Empty;
        public int Rating { get; set; }

    }
}




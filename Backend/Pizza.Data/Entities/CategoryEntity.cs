namespace Pizza.Data.Entities
{
    public class CategoryEntity
    {
        [Key]

        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public List<PizzaEntity>? Pizzas { get; set; }
    }
}

namespace Pizza.Common.Models
{
    public class CategoryUpdateModel
    {

        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string? Description { get; set; }
    }
}

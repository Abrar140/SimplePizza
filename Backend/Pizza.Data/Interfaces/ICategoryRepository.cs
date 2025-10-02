namespace Pizza.Data.Interfaces
{
    public interface ICategoryRepository
    {

        IEnumerable<CategoryEntity> AllCategories { get; }

    }
}

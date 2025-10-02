namespace Pizza.Business.Interfaces
{
    public interface IPizzaService
    {
        Task<IEnumerable<PizzaDto>> GetAllAsync();

        Task<PizzaDto?> GetByIdAsync(int id);

        Task<PizzaDto> AddAsync(PizzaDto pizza);

        Task<PizzaDto> UpdateAsync(PizzaDto pizza);

        Task<bool> DeleteAsync(int id);
    }
}














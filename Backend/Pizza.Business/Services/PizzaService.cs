namespace Pizza.Business.Services
{
    public class PizzaService : IPizzaService
    {
        private readonly IPizzaRepository _pizzaRepository;
        private readonly IMapper _mapper;
        public PizzaService(IPizzaRepository pizzaRepository, IMapper mapper)
        {
            _pizzaRepository = pizzaRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<PizzaDto>> GetAllAsync()
        {
            var pizzas = _pizzaRepository.AllPizza;
            return pizzas.Select(p => _mapper.Map<PizzaDto>(p));
        }

        public async Task<PizzaDto?> GetByIdAsync(int id)
        {
            var pizza = _pizzaRepository.GetPizzaById(id);
            return pizza == null ? null : _mapper.Map<PizzaDto>(pizza);
        }
        public async Task<PizzaDto> AddAsync(PizzaDto pizza)

        {
            if (pizza.Rating > 10 || pizza.Rating < 0)
            {
                throw new ArgumentException("Rating must be inside rangelimit(0-10)");
            }

            var entity = _mapper.Map<PizzaEntity>(pizza);
            var newPizza = await _pizzaRepository.AddPizzaAsync(entity);
            return _mapper.Map<PizzaDto>(newPizza);
        }
        public async Task<PizzaDto?> UpdateAsync(PizzaDto pizza)
        {

            var entity = _mapper.Map<PizzaEntity>(pizza);
            var updated = await _pizzaRepository.UpdatePizzaAsync(entity);
            return updated == null ? null : _mapper.Map<PizzaDto>(updated);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _pizzaRepository.DeletePizzaAsync(id);
        }


    }
}

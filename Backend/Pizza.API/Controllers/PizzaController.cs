namespace Pizza.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly IPizzaService _pizzaServices;
        private readonly IMapper _mapper;

        public PizzaController(IPizzaService pizzaServices, IMapper mapper)
        {
            _pizzaServices = pizzaServices;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PizzaDto>>> GetPizzas()
        {
            return Ok(await _pizzaServices.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PizzaDto>> GetPizza(int id)
        {
            var pizza = await _pizzaServices.GetByIdAsync(id);
            if (pizza == null)
            {
                return NotFound();
            }
            return Ok(pizza);
        }

        [HttpPost]
        public async Task<ActionResult<PizzaDto>> PostPizza(PizzaCreateModel model)
        {
            var dto = _mapper.Map<PizzaDto>(model);
            var newPizza = await _pizzaServices.AddAsync(dto);
            return CreatedAtAction(nameof(GetPizza), new { id = newPizza.PizzaId }, newPizza);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPizza(int id, PizzaUpdateModel model)
        {
            if (id != model.PizzaId)
                return BadRequest();


            var dto = _mapper.Map<PizzaDto>(model);

            var updated = await _pizzaServices.UpdateAsync(dto);

            if (updated == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePizza(int id)
        {
            var deleted = await _pizzaServices.DeleteAsync(id);
            if (!deleted)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}

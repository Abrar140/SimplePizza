using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PizzaShop.Models;
using PizzaShop.Services;
using System.Threading.Tasks;

namespace PizzaShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PizzaController: ControllerBase
    {
        private readonly IPizzaServices _pizzaServices;

        public PizzaController(IPizzaServices pizzaServices)
        {
            _pizzaServices = pizzaServices;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pizza>>> GetPizzas()
        {
            return Ok(await _pizzaServices.GetAllAsync());
        }




        [HttpGet("{id}")]
        public ActionResult<Pizza> GetPizza(int id)
        {
            var pizza = _pizzaServices.GetByIdAsync(id);
            if (pizza == null)
            {
                return NotFound();
            }
            return Ok(pizza);
        }

        [HttpPost]
        public async Task<ActionResult<Pizza>>PostPizza(Pizza pizza)
        {
            var newPizza = await _pizzaServices.AddAsync(pizza);
            return CreatedAtAction(nameof(GetPizza), new { id = pizza.PizzaId }, newPizza);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutPizza(int id, Pizza pizza)
        {
            if (id != pizza.PizzaId)
                return BadRequest();

            var updated = await _pizzaServices.UpdateAsync(pizza);

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

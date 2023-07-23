using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MVCReactApp1.Models;

namespace MVCReactApp1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly ReactMvcContext _dbcontext;

        public EmpleadoController(ReactMvcContext context)
        {
            _dbcontext = context;
        }

        [HttpGet]
        [Route("ObtenerEmpleado")]

        public IActionResult ObtenerEmpleado()
        {
            List<Empleado> lista = _dbcontext.Empleados.ToList();

            return StatusCode(StatusCodes.Status200OK,lista);

        }

    }
}

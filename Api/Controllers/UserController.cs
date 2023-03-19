using Microsoft.AspNetCore.Mvc;

namespace kartaca
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        public UserController() { }

        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok("Yasin");
        }
    }
}

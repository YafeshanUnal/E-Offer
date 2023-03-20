using Microsoft.AspNetCore.Mvc;
using kartaca;

namespace kartaca
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("docker")]
        public IActionResult Docker()
        {
            return Ok("Docker");
        }

        // [HttpPost]
        // public IActionResult SaveUser([FromBody] UserModal user)
        // {
        //     _redisService.AddUser(user.username, user.password, user.phone);
        //     return Ok();
        // }
    }
}

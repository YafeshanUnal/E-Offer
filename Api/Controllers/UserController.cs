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

        // get All Users
        [HttpGet("users")]
        public IActionResult GetAllUsers()
        {
            var redis = new RedisService();
            var users = redis.GetAllUsers();
            return Ok(users);
        }

        // get User
        [HttpGet("user")]
        public IActionResult GetUser([FromQuery] string username, [FromQuery] string password)
        {
            var redis = new RedisService();
            var user = redis.GetUser(username, password);
            return Ok(user);
        }

        [HttpGet("redistest")]
        public IActionResult RedisTest()
        {
            var redis = new RedisService();
            var redisTest = redis.GetRedisTest();
            return Ok(redisTest);
        }
    }
}

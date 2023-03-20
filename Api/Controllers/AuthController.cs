using System;
using Microsoft.AspNetCore.Mvc;
using kartaca;

namespace kartaca
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly AuthService _authService;

        public AuthController(IConfiguration configuration, AuthService AuthService)
        {
            _configuration = configuration;
            _authService = AuthService;
        }

        [HttpGet("{token}")]
        public IActionResult IsAuthenticated(string token)
        {
            var isAuthenticated = _authService.IsAuthenticated(token);
            if (isAuthenticated)
            {
                return Ok("Authenticated");
            }
            else
            {
                return BadRequest("Not Authenticated");
            }
        }
    }
}

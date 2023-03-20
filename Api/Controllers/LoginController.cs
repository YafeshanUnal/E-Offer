using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;

namespace kartaca
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly LoginService _loginService;

        public LoginController(IConfiguration configuration, LoginService loginService)
        {
            _configuration = configuration;
            _loginService = loginService;
        }

        [HttpPost]
        public IActionResult Authenticate([FromBody] LoginModal request)
        {
            System.Console.WriteLine(
                "Username,Password" + request.username + " " + request.password
            );
            var token = _loginService.Authenticate(request.username, request.password);

            if (token == null)
            {
                return BadRequest(new { message = "Kullanıcı adı veya şifre hatalı." });
            }

            var name = _loginService.GetName(request.username, request.password);

            return Ok(new { token = token, name = name });
        }
    }
}

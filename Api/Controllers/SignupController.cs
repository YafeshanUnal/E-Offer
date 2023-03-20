using System;
using kartaca;
using Microsoft.AspNetCore.Mvc;

namespace kartaca
{
    [Route("[controller]")]
    public class SignupController : Controller
    {
        private readonly SignupService _signupService;

        public SignupController(SignupService SignupService)
        {
            _signupService = SignupService;
        }

        [HttpPost]
        public IActionResult Signup([FromBody] SignupModal signupModal)
        {
            var signupResponse = _signupService.Signup(signupModal);
            if (signupResponse != null)
            {
                return Ok(signupResponse);
            }
            else
            {
                return BadRequest("Signup Failed");
            }
        }
    }
}

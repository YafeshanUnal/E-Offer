using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using kartaca;

namespace kartaca
{
    public class LoginService
    {
        private readonly IConfiguration _configuration;

        public LoginService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string Authenticate(string username, string password)
        {
            if (IsValidUser(username, password))
            {
                // JWT token oluştur
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["Jwt:SecretKey"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(
                        new Claim[] { new Claim(ClaimTypes.Name, username) }
                    ),
                    Expires = DateTime.UtcNow.AddMinutes(
                        Convert.ToDouble(_configuration["Jwt:ExpiresInMinutes"])
                    ),
                    SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature
                    )
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var tokenString = tokenHandler.WriteToken(token);

                // gelen token'ı redis cache'e kaydet
                // var redis = new RedisService();
                // redis.SaveToken(tokenString, username);

                // Tokenı kullanıcıya geri gönderin
                return tokenString;
            }
            else
            {
                return null;
            }
        }

        public string GetName(string username, string password)
        {
            if (IsValidUser(username, password))
            {
                var redis = new RedisService();
                var user = redis.GetUser(username, password);
                return user;
            }
            else
            {
                return null;
            }
        }

        private bool IsValidUser(string username, string password)
        {
            var redis = new RedisService();
            var user = redis.GetUser(username, password);
            if (user != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}

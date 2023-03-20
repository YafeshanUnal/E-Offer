using System;
using StackExchange.Redis;
using kartaca;

namespace kartaca
{
    public class AuthService
    {
        // gelen tokenı kontrol et
        public bool IsAuthenticated(string token)
        {
            // gelen tokenı kontrol et
            // System.Console.WriteLine("Triggered");
            // // var redis = new RedisService();
            // // var responseToken = redis.GetToken(token);
            // System.Console.WriteLine("Response Token:" + responseToken);
            // if (responseToken != null)
            // {
            //     return true;
            // }
            // else
            // {
            //     return false;
            // }
            return true;
        }
    }
}

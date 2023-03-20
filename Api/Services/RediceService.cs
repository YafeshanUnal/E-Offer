// using StackExchange.Redis;

// public class RedisService
// {
//     private readonly ConnectionMultiplexer _redis;

//     public RedisService()
//     {
//         _redis = ConnectionMultiplexer.Connect("localhost:6379");
//     }

//     // add User to Redis
//     public void AddUser(string username, string password, string phone)
//     {
//         System.Console.WriteLine("Add User Triggered");
//         var db = _redis.GetDatabase();
//         var userId = db.StringIncrement("user:next-id");
//         db.HashSet(
//             $"user:{userId}",
//             new HashEntry[]
//             {
//                 new HashEntry("username", username),
//                 new HashEntry("password", password),
//                 new HashEntry("phone", phone)
//             }
//         );
//     }

//     // get User from Redis
//     public string GetUserPassword(int userId)
//     {
//         var db = _redis.GetDatabase();
//         var password = db.HashGet($"user:{userId}", "password");
//         return password;
//     }

//     public string GetToken(string token)
//     {
//         System.Console.WriteLine("Redis Triggered");
//         var db = _redis.GetDatabase();
//         return db.StringGet(token);
//     }

//     public void SaveToken(string token, string username)
//     {
//         var db = _redis.GetDatabase();
//         db.StringSet(token, username);
//     }
// }

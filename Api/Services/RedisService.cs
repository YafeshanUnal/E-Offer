using System;
using StackExchange.Redis;

public class RedisService
{
    private readonly ConnectionMultiplexer _redis;

    public RedisService()
    {
        _redis = ConnectionMultiplexer.Connect("redis:6379,abortConnect=false");
    }

    // add User to Redis
    public void AddUser(string name, string username, string password, string phone)
    {
        var db = _redis.GetDatabase();
        HashEntry[] userFields = new HashEntry[]
        {
            new HashEntry("name", name),
            new HashEntry("username", username),
            new HashEntry("password", password),
            new HashEntry("phone", phone)
        };
        var id = $"{username}&{password}";
        db.HashSet("users:" + id, userFields);
    }

    // getUser array from Redis
    public string[] GetAllUsers()
    {
        var db = _redis.GetDatabase();
        var users = db.HashGetAll("users:641b4676-0673-419e-9d82-e631156e039c");
        System.Console.WriteLine("Redis:" + users);
        string[] userArray = new string[users.Length];
        for (int i = 0; i < users.Length; i++)
        {
            System.Console.WriteLine("Redis:" + users[i].Value);
            userArray[i] = users[i].Value;
        }
        return userArray;
    }

    // get User to username&password from Redis
    public string GetUser(string username, string password)
    {
        var db = _redis.GetDatabase();
        var user = db.HashGet($"users:{username}&{password}", "name");

        return user;
    }

    // redis test
    public string GetRedisTest()
    {
        var db = _redis.GetDatabase();
        var redisTest = db.StringGet("mykey");
        var userTest = db.ListGetByIndex("user", 0);
        return userTest;
    }

    // get All Users by List from Redis

    // get User from Redis
    public string GetUserPassword(int userId)
    {
        var db = _redis.GetDatabase();
        var password = db.HashGet($"user:{userId}", "password");
        return password;
    }

    public string GetToken(string token)
    {
        System.Console.WriteLine("Redis Triggered");
        var db = _redis.GetDatabase();
        return db.StringGet(token);
    }

    public void SaveToken(string token, string username)
    {
        var db = _redis.GetDatabase();
        db.StringSet(token, username);
    }
}

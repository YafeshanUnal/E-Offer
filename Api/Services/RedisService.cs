using System;
using StackExchange.Redis;

public class RedisService
{
    private readonly ConnectionMultiplexer _redis;
    private readonly IServer _server;

    public RedisService()
    {
        _redis = ConnectionMultiplexer.Connect("redis:6379,abortConnect=false");
        _server = _redis.GetServer("redis:6379");
    }

    // add User to Redis
    public void AddUser(string name, string username, string password, string phone)
    {
        System.Console.WriteLine("Redis Triggered");
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

    public string GetUserById(string id)
    {
        var db = _redis.GetDatabase();
        var user = db.HashGet($"users:{id}", "name");

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

    public void AddOffer(string name, string offerPrice, string userId)
    {
        var db = _redis.GetDatabase();
        var id = $"{name}&{offerPrice}&{userId}";
        // bunları key olarak kaydet direkt set key value şeklinde HashEntry değil
        db.StringSet("offers:" + id, id);
    }

    public string[] GetOffers()
    {
        var db = _redis.GetDatabase();
        RedisKey[] keys = _server.Keys(pattern: "offers:*").ToArray();
        RedisValue[] values = db.StringGet(keys);
        string[] offers = values.Select(v => (string)v).ToArray();

        return offers;
    }
}

using kartaca;

namespace kartaca
{
    public class SignupService
    {
        public SignupService() { }

        public string Signup(SignupModal signupModal)
        {
            var redis = new RedisService();
            redis.AddUser(
                signupModal.name,
                signupModal.username,
                signupModal.password,
                signupModal.phone
            );
            return "Signup Success";
        }
    }
}

using System.Collections.Generic;

namespace kartaca
{
    public class OfferService
    {
        public OfferService() { }

        public string AddOffer(OfferModal offerModal)
        {
            var redis = new RedisService();
            System.Console.WriteLine("offer service", offerModal);
            redis.AddOffer(offerModal.name, offerModal.offerPrice, offerModal.userId);

            return "Offer Added";
        }

        public string[] GetOffers()
        {
            var redis = new RedisService();
            string[] offers = redis.GetOffers();
            return offers;
        }
    }
}

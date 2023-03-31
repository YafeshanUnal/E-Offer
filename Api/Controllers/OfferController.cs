using System;
using kartaca;
using Microsoft.AspNetCore.Mvc;
using StackExchange.Redis;

namespace kartaca
{
    [Route("[controller]")]
    public class OfferController : Controller
    {
        public OfferController() { }

        [HttpPost]
        public string AddOffer([FromBody] OfferModal offerModal)
        {
            System.Console.WriteLine("offer controller", offerModal);
            var offerService = new OfferService();
            return offerService.AddOffer(offerModal);
        }

        [HttpGet]
        public string[] GetOffers()
        {
            var offerService = new OfferService();
            string[] offers = offerService.GetOffers();
            return offers;
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Model;
using Service;
using System.Text.Json;
using YouLearn.Model;

namespace YouLearn.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class SubscriberController : ControllerBase
    {

        private readonly ISubscriberService _subscriberService;
        private readonly ISubscriberProfileService _subscriberProfileService;

        
        public SubscriberController(ISubscriberService subscriberService, ISubscriberProfileService subscriberProfileService)
        {
            this._subscriberService = subscriberService;
            this._subscriberProfileService = subscriberProfileService;
        }

        [HttpGet(Name = "subscribe")]
        public IActionResult Get(string subscribe)
        {
            return Ok(new SubscriberResponse() { Id = 1 });
        }


        [Route("AddSubscriber")]
        [HttpPost]
        public ActionResult AddSubscribero([FromBody] Subscriber model)
        {
            Subscriber userEntity = new Subscriber
            {
                Name = model.Name,
                Email = model.Email,
                Password = model.Password,
                AddedDate = DateTime.UtcNow,
                ModifiedDate = DateTime.UtcNow,
                IPAddress = Request.HttpContext.Connection.RemoteIpAddress.ToString()
                 
            };

            if (model.SubscriberProfile == null)
            {
                userEntity.SubscriberProfile = new SubscriberProfile
                {
                    LastName = model.Name,
                    FirstName = model.Name,
                    AddedDate = DateTime.UtcNow,
                    ModifiedDate = DateTime.UtcNow
                };
            }

            _subscriberService.InsertSubscriber(userEntity);
            if (userEntity.Id > 0)
            {
                var result = JsonSerializer.Serialize(userEntity);

                return Ok(result);
            }
            return RedirectToAction();
        }

    }
}

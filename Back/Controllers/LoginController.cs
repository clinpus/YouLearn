using Microsoft.AspNetCore.Mvc;
using Model;
using Service;
using YouLearn.Model;

namespace YouLearn.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginService)
        {
            this._loginService = loginService;
        }

        [Route("login")]
        [HttpPost]
        public ActionResult Login([FromBody] Login model)
        {

            if (this._loginService.IsAuthorisedLogin(model))
                return Ok(new LoginResponse (){ login = "ok" });
            else
                return Ok(new LoginResponse() { login = "ko" });
        }
    }
}

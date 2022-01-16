using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Message.Request;
using WebAPI.Message.Response;
using WebAPI.Services;
using WebAPI.Services.Interface;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _service;

        public AuthenticationController(IAuthenticationService service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("login")]
        public LoginResponse Login(LoginRequest request)
        {
            var service = _service.Login(request);

            return service;
        }

        //[HttpGet]
        //public IEnumerable<Student> Get()
        //{
        //    return _service.GetAllStudent();
        //}

    }
}

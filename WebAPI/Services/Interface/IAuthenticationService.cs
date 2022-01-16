using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.DataLayer;
using WebAPI.Message.Request;
using WebAPI.Message.Response;

namespace WebAPI.Services.Interface
{
    public interface IAuthenticationService
    {
        LoginResponse Login(LoginRequest request);

        List<Student> GetAllStudent();
    }
}

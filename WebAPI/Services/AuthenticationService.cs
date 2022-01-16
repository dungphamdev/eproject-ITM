using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.DataLayer;
using WebAPI.Message.Request;
using WebAPI.Message.Response;
using WebAPI.Services.Interface;

namespace WebAPI.Services
{
    public class AuthenticationService: IAuthenticationService
    {
        private readonly ITMContext _context;

        public AuthenticationService(ITMContext context)
        {
            _context = context;
        }

        public LoginResponse Login(LoginRequest request)
        {
            var student = _context.Students.FirstOrDefault(f => f.StudentID == request.StudentID && f.Password == request.Password);

            var result = new LoginResponse();
            result.Success = student != null ? true : false;

            return result;
        }

        public List<Student> GetAllStudent()
        {
            return _context.Students.ToList();
        }

    }
}

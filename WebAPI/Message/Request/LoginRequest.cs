using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Message.Request
{
    public class LoginRequest
    {
        public string StudentID { get; set; }
        public string Password { get; set; }
    }
}

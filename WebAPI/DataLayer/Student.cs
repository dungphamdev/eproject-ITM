using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.DataLayer
{
    public class Student
    {
        [Key]
        public int ID { get; set; }

        public string StudentID { get; set; }
        public string Password { get; set; }
    }
}

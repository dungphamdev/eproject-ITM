using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.DataLayer
{
    public class ITMContext : DbContext
    {
        public ITMContext(DbContextOptions<ITMContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasData(SeedData._listStudents );
        }

        public DbSet<Student> Students { get; set; }


        // seeding data
        private class SeedData
        {
            // students
            public static List<Student> _listStudents = new List<Student>()
            {
                new Student{ID = 1,StudentID ="001", Password="1" },
                new Student{ID = 2,StudentID ="002", Password="1" },
            };
        }
    }

}

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ContactBook.Models
{
    public class ContactContext : DbContext
    {
        public ContactContext() : base("Name=DefaultConnection")
        {

        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
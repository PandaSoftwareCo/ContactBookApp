namespace ContactBook.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ContactBook.Models.ContactContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ContactBook.Models.ContactContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
            context.Contacts.AddOrUpdate(m => m.Name,
                new Models.Contact { Name = "James Bond", Age = 35, Address = "London" },
                new Models.Contact { Name = "Jason Bourne", Age = 35, Address = "New York" }
                );
        }
    }
}

using ContactBook.Interfaces;
using ContactBook.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ContactBook.Infrastructure
{
    public class ContactRepository : IContactRepository
    {
        private ContactContext db = new ContactContext();

        public IQueryable<Contact> GetAll()
        {
            return db.Contacts.OrderBy(m => m.Name);
        }
        public Contact GetByID(int id)
        {
            return db.Contacts.FirstOrDefault(p => p.Id == id);
        }
        public void Add(Contact contact)
        {
            db.Contacts.Add(contact);
            db.SaveChanges();
        }

        public void Update(Contact contact)
        {
            db.Entry(contact).State = EntityState.Modified;
            db.SaveChanges();
        }

        public void Delete(Contact contact)
        {
            db.Contacts.Remove(contact);
            db.SaveChanges();
        }

        public bool ContactExists(int id)
        {
            return db.Contacts.Count(e => e.Id == id) > 0;
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (db != null)
                {
                    db.Dispose();
                    db = null;
                }
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
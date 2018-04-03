using ContactBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactBook.Interfaces
{
    public interface IContactRepository : IDisposable
    {
        IQueryable<Contact> GetAll();
        Contact GetByID(int id);
        void Add(Contact contact);
        void Update(Contact contact);
        void Delete(Contact contact);
        bool ContactExists(int id);
    }
}

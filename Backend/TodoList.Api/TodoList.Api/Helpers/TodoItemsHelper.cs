using System;
using System.Linq;
using TodoList.Api.Classes;
using TodoList.Api.Interfaces;

namespace TodoList.Api.Helpers
{
    public class TodoItemsHelper : ITodoItemsHelper
    {
        private readonly ITodoContext _context;

        public TodoItemsHelper(ITodoContext context)
        {
            _context = context;
        }

        public bool TodoItemIdExists(Guid id)
        {
            return _context.TodoItems.Any(x => x.Id == id);
        }

        public bool TodoItemDescriptionExists(string description)
        {
            return _context.TodoItems
                   .Any(x => x.Description.ToLowerInvariant() == description.ToLowerInvariant() && !x.IsCompleted);
        }
    }
}

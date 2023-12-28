using System;
using System.Linq;
using TodoList.Api.Interfaces;

namespace TodoList.Api.Helpers
{
    public class TodoItemsHelper : ITodoItemsHelper
    {
        private readonly TodoContext _context;

        public TodoItemsHelper(TodoContext context)
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

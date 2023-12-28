using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoList.Api.Interfaces;

namespace TodoList.Api.Services
{
    public class TodoItemsService : ITodoItemsService
    {
        private readonly TodoContext _context;

        public TodoItemsService(TodoContext context)
        {
            _context = context;
        }

        // GET methods
        public async Task<List<TodoItem>> GetAllIncompleteTodoItems()
        {
            return await _context.TodoItems.Where(x => !x.IsCompleted).ToListAsync();
        }

        public async Task<TodoItem> GetTodoItemWithId(Guid id)
        {
            return await _context.TodoItems.FindAsync(id);
        }

        // PUT methods
        public async Task UpdateTodoItem(TodoItem item)
        {
            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        // POST methods
        public async Task AddTodoItem(TodoItem item)
        {
            _context.TodoItems.Add(item);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }
    }
}

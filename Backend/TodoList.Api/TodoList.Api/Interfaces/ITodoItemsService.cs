using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TodoList.Api.Interfaces
{
    public interface ITodoItemsService
    {
        Task<List<TodoItem>> GetAllIncompleteTodoItems();
        Task<TodoItem> GetTodoItemWithId(Guid id);
        Task UpdateTodoItem(TodoItem item);
        Task AddTodoItem(TodoItem item);
    }
}

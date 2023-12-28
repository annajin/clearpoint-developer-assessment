using System;

namespace TodoList.Api.Interfaces
{
    public interface ITodoItemsHelper
    {
        bool TodoItemIdExists(Guid id);
        bool TodoItemDescriptionExists(string description);

    }
}

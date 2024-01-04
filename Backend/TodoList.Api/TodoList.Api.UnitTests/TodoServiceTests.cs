using Moq;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using TodoList.Api.Classes;
using Xunit;

namespace TodoList.Api.UnitTests
{
    public class TodoServiceTests : BaseTest
    {
        [Fact]
        public async Task GetAllIncompleteTodoItems_Should_Return_Incomplete_Items()
        {
            List<TodoItem> mixedItems = new List<TodoItem>
            {
                new TodoItem { Id = Guid.NewGuid(), Description = "Incomplete 1", IsCompleted = false },
                new TodoItem { Id = Guid.NewGuid(), Description = "completed 2", IsCompleted = true }
            };

            SetupDbMock(mixedItems);

            List<TodoItem> result = await MockService.GetAllIncompleteTodoItems();
            Assert.Equal(mixedItems.Count - 1, result.Count);
        }

    }
}

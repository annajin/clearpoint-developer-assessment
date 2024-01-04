using System;
using Xunit;
using System.Collections.Generic;
using TodoList.Api.Classes;

namespace TodoList.Api.UnitTests
{
    public class TodoHelperTests : BaseTest
    {

        [Fact]
        public void TodoItemIdExists_Should_Return_Correct_Value()
        {
            Guid testId = Guid.NewGuid();
            List<TodoItem> todoItems = new List<TodoItem>
            {
                new TodoItem { Id = testId, Description = "test", IsCompleted = false }
            };

            SetupDbMock(todoItems);
            Assert.True(MockHelper.TodoItemIdExists(testId));
            Assert.False(MockHelper.TodoItemIdExists(Guid.NewGuid()));
        }

        [Fact]
        public void TodoItemDescriptionExists_Should_Return_Correct_Value()
        {
            // Arrange
            string testDescription = "Test Description";
            List<TodoItem> todoItems = new List<TodoItem>
            {
                new TodoItem { Id =  Guid.NewGuid(), Description = testDescription, IsCompleted = false }
            };
            SetupDbMock(todoItems);

            Assert.True(MockHelper.TodoItemDescriptionExists(testDescription));
            Assert.False(MockHelper.TodoItemDescriptionExists("random"));
        }
    }
}

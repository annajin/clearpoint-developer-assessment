using Microsoft.EntityFrameworkCore;
using Moq;
using System.Collections.Generic;
using System.Linq;
using TodoList.Api.Classes;
using TodoList.Api.Helpers;
using TodoList.Api.Interfaces;
using TodoList.Api.Services;

namespace TodoList.Api.UnitTests
{
    public class BaseTest
    {
        protected Mock<ITodoContext> MockContext;
        protected ITodoItemsHelper MockHelper;
        protected ITodoItemsService MockService;

        protected BaseTest() { }

        public void SetupDbMock(List<TodoItem> todoitems)
        {
            MockContext = new Mock<ITodoContext>();
            MockContext.Setup(c => c.TodoItems).Returns(GetQueryableMockDbSet(todoitems));

            MockHelper = new TodoItemsHelper(MockContext.Object);
            MockService = new TodoItemsService(MockContext.Object);
        }

        // reference: https://stackoverflow.com/questions/31349351/how-to-add-an-item-to-a-mock-dbset-using-moq
        private static DbSet<T> GetQueryableMockDbSet<T>(List<T> sourceList) where T : class
        {
            var queryable = sourceList.AsQueryable();

            var dbSet = new Mock<DbSet<T>>();
            dbSet.As<IQueryable<T>>().Setup(m => m.Provider).Returns(queryable.Provider);
            dbSet.As<IQueryable<T>>().Setup(m => m.Expression).Returns(queryable.Expression);
            dbSet.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(queryable.ElementType);
            dbSet.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(() => queryable.GetEnumerator());
            dbSet.Setup(d => d.Add(It.IsAny<T>())).Callback<T>((s) => sourceList.Add(s));

            return dbSet.Object;
        }
    }
}

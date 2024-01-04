using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;
using TodoList.Api.Interfaces;

namespace TodoList.Api.Classes
{
    public class TodoContext : DbContext, ITodoContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }

        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync();
        }
    }
}

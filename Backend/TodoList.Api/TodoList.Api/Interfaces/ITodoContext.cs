using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;
using TodoList.Api.Classes;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace TodoList.Api.Interfaces
{
    public interface ITodoContext
    {
        DbSet<TodoItem> TodoItems { get; set; }
        Task<int> SaveChangesAsync();

        // reference https://learn.microsoft.com/en-us/dotnet/api/system.data.entity.dbcontext.entry?view=entity-framework-6.2.0
        EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
    }
}

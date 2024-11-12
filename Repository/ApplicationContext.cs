﻿
using Microsoft.EntityFrameworkCore;
using Model;

namespace Repository
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new SubscriberMap(modelBuilder.Entity<Subscriber>());
            new SubscriberProfileMap(modelBuilder.Entity<SubscriberProfile>());
        }
    }
}

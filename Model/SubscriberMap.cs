using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Model
{
    public class SubscriberMap
    {

        public SubscriberMap(EntityTypeBuilder<Subscriber> entityBuilder)
        {
            if (entityBuilder is null)
            {
                throw new ArgumentNullException(nameof(entityBuilder));
            }

            entityBuilder.HasKey(t => t.Id);
            entityBuilder.Property(t => t.Email).IsRequired();
            entityBuilder.Property(t => t.Password).IsRequired();
            entityBuilder.Property(t => t.Email).IsRequired();
            entityBuilder.HasOne(t => t.SubscriberProfile).WithOne().HasForeignKey<SubscriberProfile>(x => x.IDSubscriber);
        }

    }
}

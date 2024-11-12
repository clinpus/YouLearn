namespace Model
{
    public class Subscriber: BaseEntity
    {
        public string Name { get; set; }
        public string? Email { get; set; }
        public string Password { get; set; }
        public string? IPAddress { get; set; }
        public virtual SubscriberProfile? SubscriberProfile { get; set; }


    }
}

using Model;

namespace Service
{
    public interface ISubscriberService
    {
        IEnumerable<Subscriber> GetSubscribers();
        Subscriber GetSubscriber(long id);
        void InsertSubscriber(Subscriber subscriber);
        void UpdateSubscriber(Subscriber subscriber);
        void DeleteSubscriber(long id);
    }
}

using Model;
using Repository;

namespace Service
{
    public  class SubscriberService: ISubscriberService
    {
        private IRepository<Subscriber> subscriberRepository;
        private IRepository<SubscriberProfile> subscriberProfileRepository;

        public SubscriberService(IRepository<Subscriber> subscriberRepository, IRepository<SubscriberProfile> subscriberProfileRepository)
        {
            this.subscriberRepository = subscriberRepository;
            this.subscriberProfileRepository = subscriberProfileRepository;
        }

        public IEnumerable<Subscriber> GetSubscribers()
        {
            return subscriberRepository.GetAll();
        }

        public Subscriber GetSubscriber(long id)
        {
            return subscriberRepository.Get(id);
        }

        public void InsertSubscriber(Subscriber subscriber)
        {
            subscriberRepository.Insert(subscriber);
        }
        public void UpdateSubscriber(Subscriber subscriber)
        {
            subscriberRepository.Update(subscriber);
        }

        public void DeleteSubscriber(long id)
        {
            SubscriberProfile userProfile = subscriberProfileRepository.Get(id);
            subscriberProfileRepository.Remove(userProfile);
            Subscriber subscriber = GetSubscriber(id);
            subscriberRepository.Remove(subscriber);
            subscriberRepository.SaveChanges();
        }
    }
}

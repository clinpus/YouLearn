
using Model;
using Repository;

namespace Service
{
    public class SubscriberProfileService:ISubscriberProfileService
    {


        private IRepository<SubscriberProfile> subscriberProfileRepository;

        public SubscriberProfileService(IRepository<SubscriberProfile> subscriberProfileRepository)
        {
            this.subscriberProfileRepository = subscriberProfileRepository;
        }

        public SubscriberProfile GetSubscriberProfile(long id)
        {
            return subscriberProfileRepository.Get(id);
        }


    }
}

using Microsoft.Azure.Documents.SystemFunctions;
using Model;
using Repository;

namespace Service
{
    public  class LoginService: ILoginService
    {
        private IRepository<Subscriber> subscriberRepository;

        public LoginService(IRepository<Subscriber> subscriberRepository)
        {
            this.subscriberRepository = subscriberRepository;
        }

        public IEnumerable<Subscriber> GetLogins()
        {
            return subscriberRepository.GetAll();
        }

        public Subscriber GetLogin(long id)
        {
            return subscriberRepository.Get(id);
        }

        public Subscriber GetLoginByEmail(string email)
        {
            List<Subscriber> _lgns = subscriberRepository.GetAll().ToList() ;
            var _lgn = _lgns.Where(l => l.Email == email).FirstOrDefault();
            // test 
            return _lgn;
        }

        public void InsertLogin(Subscriber subscriber)
        {
            subscriberRepository.Insert(subscriber);
        }
        public void UpdateLogin(Subscriber subscriber)
        {
            subscriberRepository.Update(subscriber);
        }

        public void DeleteLogin(long id)
        {
            Subscriber subscriber = GetLogin(id);
            subscriberRepository.Remove(subscriber);
            subscriberRepository.SaveChanges();
        }

        public bool IsAuthorisedLogin(Login login)
        {
            List<Subscriber> _lgns = subscriberRepository.GetAll().ToList();
            Subscriber _lgn = _lgns.Where(l => l.Email == login.Email && l.Password == login.Password).FirstOrDefault();
            return ((_lgn==null)?false:true);
        }
    }
}

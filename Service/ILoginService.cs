using Model;

namespace Service
{
    public interface ILoginService
    {
        IEnumerable<Subscriber> GetLogins();
        Subscriber GetLogin(long id);
        Subscriber GetLoginByEmail(string email);
        bool IsAuthorisedLogin(Login subscriber);
        void InsertLogin(Subscriber subscriber);
        void UpdateLogin(Subscriber subscriber);
        void DeleteLogin(long id);
    }
}

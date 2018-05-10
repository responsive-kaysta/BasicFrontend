using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Mvc;
using BasicFrontend.Umbraco.Models;
using Umbraco.Web.Mvc;

namespace BasicFrontend.Umbraco.Controllers
{
    public class ContactSurfaceController : SurfaceController
    {
        [System.Web.Http.HttpPost]
        public ActionResult CreateContactMessage(ContactViewModel contactMessage)
        {
            if (!ModelState.IsValid)
            {
                return CurrentUmbracoPage();
            }

            ViewBag.Contact = contactMessage;
            
            var emailSubject = WebConfigurationManager.AppSettings["emailSubject"];

            var fromEmailAddress = WebConfigurationManager.AppSettings["fromEmailAddress"];
            var destEmailAddress = WebConfigurationManager.AppSettings["destEmailAddress"];

            var emailHost = WebConfigurationManager.AppSettings["emailHost"];
            var emailUsername = WebConfigurationManager.AppSettings["emailUsername"];
            var emailPassword = WebConfigurationManager.AppSettings["emailPassword"];

            var smtp = new SmtpClient(emailHost, 587);
            var creds = new NetworkCredential(emailUsername, emailPassword);

            smtp.UseDefaultCredentials = false;
            smtp.Credentials = creds;
            smtp.EnableSsl = true;

            var to = new MailAddress(destEmailAddress);
            var from = new MailAddress(fromEmailAddress, "Your Contractor Connection");

            var body = new StringBuilder();
            body.Append(contactMessage.Name);
            body.Append(contactMessage.EmailAddress);
            body.Append(contactMessage.Message);

            var msg = new MailMessage();
            msg.To.Add(to);
            msg.From = from;
            msg.IsBodyHtml = true;
            msg.Subject = emailSubject;
            msg.Body = body.ToString();

            smtp.Send(msg);

            return CurrentUmbracoPage();
        }


    }
}
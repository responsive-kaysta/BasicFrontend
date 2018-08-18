using BasicFrontend.Umbraco.Models;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web.Configuration;
using System.Web.Mvc;
using Umbraco.Web.Mvc;
using Umbraco.Web.PublishedContentModels;

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

            var settings = (SiteGlobal)Umbraco.TypedContent(WebConfigurationManager.AppSettings["settingsPageId"]);

            ViewBag.Contact = contactMessage;
            
            var emailSubject = settings.EmailSubject;
            var fromEmailAddress = settings.EmailFromAddress;
            var destEmailAddress = settings.EmailDestinationAddress;
            var emailHost = settings.EmailHost;
            var emailUsername = settings.EmailUsername;
            var emailPassword = settings.EmailPassword;

            var smtp = new SmtpClient(emailHost, 25);
            var creds = new NetworkCredential(emailUsername, emailPassword);

            smtp.UseDefaultCredentials = false;
            smtp.Credentials = creds;
            smtp.EnableSsl = false;

            var to = new MailAddress(destEmailAddress);
            var from = new MailAddress(fromEmailAddress, settings.EmailDisplayText);

            var body = new StringBuilder();
            body.AppendLine(contactMessage.Name);
            body.AppendLine(contactMessage.EmailAddress);
            body.AppendLine(contactMessage.Message);

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
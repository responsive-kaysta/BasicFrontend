using System.ComponentModel.DataAnnotations;

namespace BasicFrontend.Umbraco.Models
{
    public class ContactViewModel
    {
        [Required]
        [StringLength(200, MinimumLength = 6)]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        [DataType(DataType.EmailAddress)]
        [Display(Name = "Email address")]
        public string EmailAddress { get; set; }

        [Required]
        [StringLength(1024, MinimumLength = 10)]
        [DataType(DataType.MultilineText)]
        [Display(Name = "Message")]
        public string Message { get; set; }
    }
}
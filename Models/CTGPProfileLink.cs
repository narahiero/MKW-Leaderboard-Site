using System.ComponentModel.DataAnnotations;
using my_app.Models.Enums;

namespace my_app.Models
{
    public class CTGPProfileLink
    {
        public CTGPProfileLink() {
        }

        public CTGPProfileLink(int playerId, string link) {
            PlayerId = playerId;
            Link = link;
        }

        public int Id { get; set; }

        [Required]
        public int PlayerId { get; set; }

        [Required]
        public string Link { get; set; }
    }
}
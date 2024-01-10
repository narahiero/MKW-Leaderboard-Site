using Microsoft.AspNetCore.Mvc;

namespace my_app.Controllers
{
    public class ApiController : ControllerBase
    {
        public ApiController()
        {

        }

        #region Protected methods
        protected ObjectResult InternalServerError()
        {
            return StatusCode(
              500,
              new
              {
                  Error = 500,
                  Message = "Something went wrong!"
              }
            );
        }
        #endregion
    }
}
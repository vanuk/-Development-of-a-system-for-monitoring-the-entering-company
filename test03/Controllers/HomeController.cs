using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System.Data;
using System.Diagnostics;
using test03.Models;

namespace test03.Controllers
{
    public class HomeController : Controller
    {
        private readonly HttpClient _httpClient;

        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, HttpClient client)
        {
            _logger = logger;
            _httpClient = client;
        }
        [HttpPost]
       /* public IActionResult Index(TeacherDTO teacherDTO)
        {
            if(teacherDTO == null)
            {
                return View(new TeacherDTO()
                {
                    id = 0,
                    data = " "
                }
                );
            }
         
            return View(teacherDTO);
        //    return View(persons);
            
        }*/
        public async Task<IActionResult> Index(string email)
        {
           // string email="dat";
           
            JsonContent content = JsonContent.Create(email);
            var response = await _httpClient.GetAsync($"https://d39a-45-151-236-174.ngrok-free.app/api/User/get-data-teacher?email={email}").ConfigureAwait(false);
         
            var da = await response.Content.ReadAsStringAsync();

            var sendContent = JsonConvert.DeserializeObject<TeacherDTO>(da);

            return View(sendContent);
           
        }
        public IActionResult Class()
        {
           
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
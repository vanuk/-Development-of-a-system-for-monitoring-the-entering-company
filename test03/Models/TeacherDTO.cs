namespace test03.Models
{
    public class TeacherDTO 
    {
        public TeacherDTO()
        {
            Subjects = new List<SubjectDTO>();
        }

       public ICollection<SubjectDTO> Subjects { get; set; }
    }
}

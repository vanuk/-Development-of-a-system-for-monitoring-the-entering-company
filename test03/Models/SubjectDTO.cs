﻿namespace test03.Models
{
    public class SubjectDTO
    {

        public SubjectDTO()
        {
            Teachers = new List<TeacherDTO>();
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FormOfControl { get; set; }
        public float Credits { get; set; }
        public float Lectures { get; set; }
        public float Labworks { get; set; }
        public float Practical { get; set; }
        public ICollection<TeacherDTO> Teachers { get; set; }


    }
}

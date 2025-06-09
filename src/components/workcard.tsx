import React from "react";

const AcademicProfessionalJourney = () => {
  const education = [
    { year: "2020", institution: "KCA University", degree: " Bachelors In Software Development" },
    { year: "2020-2024", institution: "Zalego Institute", degree: "Web Development & Mobile development" },
    { year: "1996-2008", institution: "Buruburu Girls Secondary School",degree: "Master in Visual Arts" },
  ];

  const workExperience = [
    { year: "2018-2024", company: "Ventures Institute", position: "Master in Visual Arts" },
    { year: "2016-2018", company: "Usalama Techonologies", position: "Master in Visual Arts" },
    { year: "2014-2016", company: "African Stem Girl", position: "Master in Visual Arts" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-center text-gray-500 text-[28px]">- Education & Work</h3>
      <h2 className="text-center text-3xl font-bold text-gray-500">
        My Academic and Professional Journey
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Education Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="flex items-center font-semibold text-lg">
            <span className="bg-[#DCA465]  p-2 rounded-full mr-2">🎓</span> Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="mt-4">
              <p className="text-gray-600 text-sm">{edu.year} </p>
              <h4 className="font-semibold">{edu.institution}</h4>
              <p className="text-gray-500 text-sm">{edu.degree}</p>
            </div>
          ))}
        </div>
        {/* Work Experience Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="flex items-center font-semibold text-lg">
            <span className="bg-[#DCA465]  p-2 rounded-full mr-2">💼</span> Work Experience
          </h3>
          {workExperience.map((work, index) => (
            <div key={index} className="mt-4">
              <p className="text-gray-600 text-sm">{work.year}</p>
              <h4 className="font-semibold">{work.company}</h4>
              <p className="text-gray-500 text-sm">{work.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicProfessionalJourney;

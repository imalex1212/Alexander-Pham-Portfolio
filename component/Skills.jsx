import { useEffect, useState } from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: 50 },
    { name: "CSS", level: 55 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 60 },
    { name: "Redux", level: 40 },
    { name: "Tailwind CSS", level: 60 },
  ];
  const education = [
    {
      year: "2023-2025",
      degree: "Bachelor of Information Technology",
      institution: " Asia Pacific Institute College",
    },
  ];

  const [animatedSkills, setAnimatedSkills] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const skill = document.querySelector("#skills");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (skill) observer.observe(skill);

    return () => observer.disconnect();
  });
  return (
    <section
      id="skills"
      className="bg-slate-900 py-32 px-6 relative overflow-hidden "
    >
      {/* Animated background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2-translate-y-1/
          2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent "
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="">
            <div className="mb-12">
              {/* headline */}
              <p className="text-green-400 font-semibold text-lg mb-4">
                Qualification
              </p>
              <p className="text-gray-200 text-4xl font-bold mb-8">Education</p>
            </div>
            {/* Education milestone */}
            <div>
              {education.map((edu, index) => {
                return (
                  <div
                    key={index}
                    className="border-l-2 border-green-500 pl-4 relative group"
                  >
                    <div
                      className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full
                    group-hover:scale-125 transition-all duration-300"
                    ></div>
                    <div className="text-green-400 text-sm font-semibold mb-2 group-hover:text-green-200 transition-all duration-300">
                      {edu.year}
                    </div>
                    <h3 className="text-green-400 font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">
                      {edu.institution}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Skills */}
          <div className="">
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mb-4">
                Expert
              </p>
              <p className="text-gray-200 text-4xl font-bold mb-8">My Skills</p>
            </div>

            {/* Detail skills */}
            <div className="space-y-6">
              {skills.map((skill, index) => {
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-green-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    {/* level bar */}
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-600 via-green-400 to-green-300 rounded-full ease-out relative "
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

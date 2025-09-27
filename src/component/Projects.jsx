import sortingCard from "../../public/sorting_card.png";
import quizApp from "../../public/Frontend-quiz-app.png";
import portfolio from "../../public/Portfolio.png";

import { Github, ExternalLink, GitBranch } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: " Card Game",
      description:
        "A sorting card Game built with HTML and CSS, and  Javascripts. Participants arranges a deck of cards into logical groups or sequences based on their content",
      image: sortingCard,
      techonologies: ["HTML", "CSS", "Javascript"],
      category: "Frontend",
      featured: true,
      Git: "https://github.com/imalex1212/sorting_card_game.git",
      liveLink: "https://imalex1212.github.io/sorting_card_game/",
    },
    {
      id: 2,
      title: "Front End Quiz",
      description:
        "a technical assessment or trivia test that evaluates a candidate's knowledge and skills in front-end development, covering topics like HTML, CSS, JavaScript, and Assessibility",
      image: quizApp,
      techonologies: ["HTML", "CSS", "Javascript"],
      category: "Frontend",
      featured: false,
      Git: "https://github.com/imalex1212/frontend-quiz-app.git",
      liveLink: "https://imalex1212.github.io/frontend-quiz-app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio showcasing modern design principles with smooth animations and optimized perfermance.",
      image: portfolio,
      techonologies: ["React", "Tailwind CSS"],
      category: "Frontend",
      featured: false,
      Git: "https://github.com/imalex1212/Alexander-Pham-Portfolio.git",
      liveLink: "https://imalex1212.github.io/Alexander-Pham-Portfolio/",
    },
  ];
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 relative overflow-hidden"
    >
      {/* Animated Background Element */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 rounded-full bg-green-600/10 w-72 h-72 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 rounded-full bg-blue-600/10 w-96 h-96 blur-3xl"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-gradient-to-r from-transparent via-green-600/10 to-transparent w-full h-full"
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-bold  text-green-400 mb-6">
            Feature Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </div>

        {/* Project */}
        <div className="grid lg:grid-cols-2 gap-16">
          {projects.map((project, index) => {
            return (
              <div className="group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-600 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover
                     group-hover:scale-105 transition-all duration-300 "
                  />
                  <div
                    className="absolute top-3 right-3 flex gap-2 opacity-0
                  group-hover:opacity-100 transition-all duration-300"
                  >
                    <a
                      href={project.Git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center 
                    justify-center hover:bg-white transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="font-bold mb-4 text-white text-xl">
                    {project.title}
                  </h4>
                  <p className="leading-relax text-gray-300 hover:text-green-400 transition-all duration-300">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-1 my-4">
                    {project.techonologies.map((tech, index) => {
                      return (
                        <span className="bg-green-600 rounded-full text-xs text-white font-medium py-2 px-1">
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

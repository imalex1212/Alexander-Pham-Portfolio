function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-950 relative overflow-hidden relative"
    >
      {/* Animated backgorund */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute left-1/2  -translate-x-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* First content - Avatar */}
          <div></div>
          {/* Second content - Personal info and contact */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-green-400 font-semibold text-lg">About Me</p>
              <h2 className="text-4xl md:text-5xl text-white font-bold">
                What I bring to the Team
              </h2>
            </div>
            <div className="space-y-6 text-gray-500">
              <p className="text-lg leading-relaxed">
                I am an aspiring Front-End Developer with a strong interest in
                creating clean, responsive, and user-friendly web applications.
                My focus is on building digital experiences that are both
                visually appealing and functional, using modern tools like React
                and Tailwind CSS. As someone starting out in the industry, I am
                constantly learning and improving my skills through projects and
                hands-on practice. I enjoy turning ideas into interactive
                interfaces and making sure websites not only look great but also
                work smoothly.
              </p>
              <p>
                My approach is simple: write clean code, pay attention to
                design, and always think about the user experience. I’m excited
                to grow, contribute to real-world projects, and continue
                developing into a well-rounded front-end developer.
              </p>
            </div>
            {/* Personal Contact */}
            <div className="grid grid-cols-2 gap-8 py-6">
              <div className="group">
                <p className="text-white font-semibold group-hover:text-green-400">
                  Name
                </p>
                <p className="text-gray-300">Alexander Pham</p>
              </div>
              <div className="group">
                <p className="text-white font-semibold group-hover:text-green-400">
                  Location
                </p>
                <p className="text-gray-300">Melbourne</p>
              </div>
              <div className="group">
                <p className="text-white font-semibold group-hover:text-green-400">
                  Email
                </p>
                <p className="text-gray-300">hoangalex2404@gmail.com</p>
              </div>
            </div>
            {/* Download + Learn More */}
            <div className="flex flex-wrap gap-4 transition-all duration-1000">
              <a
                href=""
                download
                className="bg-green-600 text-white px-8 py-3 rounded-lg 
              hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:scale-105"
              >
                DOWNLOAD
              </a>
              <button
                onClick={() => {
                  const skillsEle = document.querySelector("#skills");
                  if (skillsEle)
                    skillsEle.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-slate-200 text-green-400 px-7 py-2 rounded-lg
              hover:border-green-600 hover:text-green-600 transition-all duration-300 font-medium hover:scale-105"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

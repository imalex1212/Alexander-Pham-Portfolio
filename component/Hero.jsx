import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-700 pt-20 relative overflow-hidden"
    >
      {/* Animated background Element */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute left-1/2  -translate-x-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-6 py-6">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* general */}
          <div className="space-y-8">
            <p className="text-green-400 font-semibold text-lg">
              Ready To Start Work
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight ">
              I'm
              <span className="text-green-400"> Developer</span>
              <br />
              <span className="text-white">Alexander Pham</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
              Winner Winner, Turkey Dinner! <br />
              I'm a Front-End Developer. I'm here to bring to you the smoothest
              online experiences.
            </p>
            <button
              onClick={() => {
                const aboutEle = document.querySelector("#about");
                if (aboutEle) aboutEle.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-green-600 text-white px-8 py-3 text-lg rounded-lg
            hover:bg-green-700 transition-all duration-300 group flex items-center gap-2
            shadow-lg hover:shadow-xl hover:scale-105 font-medium"
            >
              LEARN MORE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
            </button>
            {/* Social Icon */}
            <div className="flex gap-4 pt-2 text-white transition-all duration-200">
              <a
                href="https://github.com/imalex1212"
                target="_blank"
                className=" w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center
              hover:bg-green-600 hover:text-white transition-all duration-400 group hover:scale-110 hover:rotate-6"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alexander-pham-60629a199"
                target="_blank"
                className=" w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center
              hover:bg-green-600 hover:text-white transition-all duration-400 group hover:scale-110 hover:rotate-6"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hoangalex2404@gmail.com"
                target="_blank"
                className=" w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center
              hover:bg-green-600 hover:text-white transition-all duration-400 group hover:scale-110 hover:rotate-6"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

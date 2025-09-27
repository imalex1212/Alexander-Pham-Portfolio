import { Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 min-h-screen py-24 overflow-hidden relative"
    >
      {/* Animated Background  */}
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
        {/* Contact-header */}
        <div className="text-center mb-16 ">
          <p className="text-green-400 font-semibold text-lg mb-4 -ml-8">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let work together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate about frontend development and looking forward to new
            opportunities to learn and build.
          </p>
        </div>

        {/* Personal Info  */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Always open to learning and new challenges — feel free to reach
              out, I’d be happy to connect.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "hoangalex2404@gmail.com",
                },
                { icon: Phone, title: "Phone", info: "+61 (0)411 196 889" },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Melbourne, Victoria, Australia",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-slate-800
                    hover:bg-slate-600 rounded-lg border border-slate-600 hover:border-green-400 hover:scale-105 group cursor-pointer"
                  >
                    <div
                      className="w-10 h-10 bg-green-500 rounded-lg flex justify-center items-center 
                  group-hover:bg-green-600 group-hover:rotate-5 transition-all duration-300"
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="">
                      <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                        {item.title}
                      </p>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">
                        {item.info}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Contact Form */}

          <div
            className="bg-slate-900 p-8 rounded-2xl border border-slate-700
            hover:border-green-500/50 transition-all duration-300"
          >
            {/* Header form */}
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            {/* Form  contact */}
            <form>
              <div className="grid md:grid-cols-2 gap-6 ">
                {/* Full name +  Email */}
                <div className="group">
                  <label
                    className="block text-sm font-semibold text-gray-300 mb-2
                    group-hover:text-green-400 transition-all duration-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-slate-800
                    border border-slate-700 rounded-lg px-4 py-3 text-white 
                    placeholder:gray-400 focus:outline-none focus:ring-2
                    focus:ring-green-500 focus:border-transparent transition-all duration-300 
                    hover:border-green-500/50"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="group">
                  <label
                    className="block text-sm font-semibold text-white mb-2 
                    group-hover:text-green-400 transition-all duration-300"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full bg-slate-800 
                      rounded-lg border border-slate-700 
                      px-4 py-3 text-white
                      placeholder:gray-400 focus:outline-none focus:ring-2 
                      focus:ring-green-500 focus:border-transparent transition-all duration-300 
                      hover:border-green-500/50
                      "
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              {/* Subject */}
              <div className="group mt-5">
                <label
                  className="block font-semibold text-white mb-2
                    group-hover:text-green-400 transition-all duration-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-slate-800 px-4 py-3
                    border border-slate-700 rounded-lg text-white
                    placeholder:gray-400 focus:outline-none focus:ring-2
                    focus:ring-green-400 focus:border-transparent group-hover:border-green-500/50"
                  placeholder="Subject"
                />
              </div>
              {/* Message */}
              <div className="group mt-5">
                <label
                  className="block font-semibold text-white mb-2 group-hover:text-green-400
                    transition-all duaration-300"
                >
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project"
                  className="w-full bg-slate-800 px-4 py-3
                    border border-slate-700 rounded-lg text-white 
                    placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500
                    focus:border-transparent transition-all duration-300 hover:border-green-500/50
                    "
                />
              </div>
              {/* Button */}
              <button
                className="mt-5 w-full bg-green-600 text-white py-4 rounded-lg 
                hover:bg-green-700 transtion-all duration-300 font-semibold  flex 
                items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105
                group"
              >
                Send Message
                <Send
                  className="w-5 h-5 transition-all duration-300 
                  group-hover:translate-x-1 group-hover:-translate-y-0.5
                  "
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

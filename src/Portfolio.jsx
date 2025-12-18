import React from "react";

export default function Portfolio() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shiva Kumar Deshi</h1>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>

          {/* Resume in Navbar */}
          <a 
            href="/Shiva_Resume.pdf" 
            download
            className="hover:text-blue-600"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Body */}
      <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 p-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 items-start text-left">

          {/* Hero */}
          <h1 className="text-4xl font-bold">Shiva Kumar Deshi</h1>
          <h2 className="text-xl text-gray-700">
            Front-End Developer (React, JavaScript, TypeScript)
          </h2>

          <p className="text-lg max-w-2xl">
            I transform complex ideas into fast, scalable, and visually refined websites using React, JavaScript, and TypeScript.
          </p>

          <div className="mt-4 flex gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            {/* Download Resume Button */}
            <a 
              href="/Shiva_Resume.pdf" 
              download 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Download Resume
            </a>

            <a 
              href="https://github.com/Deshishiva" 
              target="_blank" 
              className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition"
            >
              GitHub
            </a>
          </div>

          {/* About */}
          <div id="about" className="mt-16 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="text-lg max-w-2xl text-gray-700">
              I’m a Front-End Developer focused on building clean, responsive, and scalable web applications using React, JavaScript, and TypeScript. I also have hands-on experience with Node.js and Express, along with working knowledge of Java and Python, and a strong problem-solving mindset.
            </p>
          </div>

          {/* Skills */}
          <div id="skills" className="mt-16 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700 text-lg">
              <span>React</span><span>JavaScript</span><span>TypeScript</span>
              <span>HTML</span><span>CSS</span><span>Tailwind CSS</span>
              <span>Node.js</span><span>Express</span><span>REST APIs</span>
              <span>Java</span><span>Python</span><span>Git</span>
              <span>GitHub</span><span>VS Code</span><span>Postman</span><span>Vercel</span>
            </div>
          </div>

          {/* Projects */}
          <div id="projects" className="mt-16 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold">Projects</h3>

            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
              <h4 className="text-xl font-semibold">Pipeline Builder</h4>
              <p className="text-gray-700 mt-2">A full-stack workflow builder using React and Node.js.</p>
              <p className="mt-2 text-sm text-gray-600">Tech: React, Node.js, Express</p>
              <a 
                href="https://github.com/Deshishiva/pipeline-builder" 
                target="_blank" 
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                GitHub
              </a>
            </div>

            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
              <h4 className="text-xl font-semibold">Shop – E-commerce App</h4>
              <p className="text-gray-700 mt-2">A full-stack e-commerce app with clean UI.</p>
              <p className="mt-2 text-sm text-gray-600">Tech: React, Node.js</p>
              <a 
                href="https://github.com/Deshishiva/shop" 
                target="_blank" 
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="mt-16 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="text-gray-700 text-lg">Feel free to reach out!</p>
            <div className="flex flex-col gap-3 text-gray-800 text-md">
              <p><strong>Email:</strong> dshivakumar2031@gmail.com</p>
              <p><strong>Phone:</strong> +91 6281043752</p>
              <p>
                <strong>GitHub:</strong> 
                <a 
                  href="https://github.com/Deshishiva" 
                  target="_blank" 
                  className="text-blue-600 hover:underline"
                >
                  github.com/Deshishiva
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

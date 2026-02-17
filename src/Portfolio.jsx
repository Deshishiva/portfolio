import React from "react";

const projects = [
  {
    name: "Gupp – Multi-Personality AI Assistant",
    description:
      "A full-stack conversational AI assistant that supports multiple interaction modes and personality-based responses.",
    tech: "React, Node.js, Express, AI Integration",
    github: "https://github.com/Deshishiva/gupp",
    live: "https://gupp.netlify.app/",
  },
  {
    name: "AI Marketing Generator",
    description:
      "An AI-powered application that generates Instagram captions, hashtags, and brand taglines using local LLM models.",
    tech: "Next.js, Node.js, TypeScript, Ollama",
    github: "https://github.com/Deshishiva/ai-marketing-generator",
    live: null,
  },
  {
    name: "Bolo – Full Stack Web Application",
    description:
      "A full-stack web application demonstrating modern frontend and backend development practices.",
    tech: "React, Node.js, Express",
    github: "https://github.com/Deshishiva/bolo",
    live: "https://bolo-jet.vercel.app/",
  },
  {
    name: "EchoChat – Modern Chat UI",
    description:
      "A modern chat interface built using Next.js and Tailwind CSS with real-time UI simulation.",
    tech: "Next.js, React, Tailwind CSS",
    github: "https://github.com/Deshishiva/echochat",
    live: "https://echochat-kappa.vercel.app/",
  },
  {
    name: "Personal Task Manager",
    description:
      "A full-stack task management system using JWT-based authentication for secure user tasks.",
    tech: "Next.js, Node.js, Prisma, JWT",
    github: "https://github.com/Deshishiva/Personal-task-management-",
    live: "https://personal-task-management-lime.vercel.app",
  },
  {
    name: "UI Development Projects",
    description:
      "A collection of responsive UI applications focused on modern layouts and component-based design.",
    tech: "React, HTML, CSS, JavaScript",
    github: "https://github.com/Deshishiva/UI",
    live: "https://ui-orpin-nu.vercel.app/",
  },
];

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
          <a href="/shivaresume.pdf" download className="hover:text-blue-600">
            Resume
          </a>
        </div>
      </nav>

      {/* Body */}
      <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 p-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 items-start text-left">

          {/* Hero */}
          <h1 className="text-4xl font-bold">Shiva Kumar Deshi</h1>
          <h2 className="text-xl text-gray-700">
            Software Developer (Full Stack – Frontend Focused)
          </h2>

          <p className="text-lg max-w-2xl">
            I build full-stack web applications by combining modern frontend technologies with scalable backend systems to create seamless and user-focused digital experiences.
          </p>

          <div className="mt-4 flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View Projects
            </a>

            <a href="/shivaresume.pdf" download className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Download Resume
            </a>

            <a href="https://github.com/Deshishiva" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition">
              GitHub
            </a>
          </div>

          {/* About */}
          <div id="about" className="mt-16 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">About Me</h3>
            <p className="text-lg max-w-3xl text-gray-700">
              I am a Software Developer with strong expertise in frontend development using React, JavaScript, and TypeScript, along with hands-on experience in backend development using Node.js and Express. I specialize in building full-stack web applications that are responsive, scalable, and performance-focused by integrating REST APIs, authentication systems, and modern UI practices to deliver seamless user experiences.
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
          <div id="projects" className="mt-16 w-full">
            <h3 className="text-2xl font-semibold mb-6">Projects</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="p-6 border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition transform bg-white">
                  <h4 className="text-xl font-semibold">{project.name}</h4>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                  <p className="mt-2 text-sm text-gray-600">Tech: {project.tech}</p>

                  <div className="flex gap-3 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      GitHub
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="mt-16 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Contact</h3>

            <div className="flex flex-col gap-3 text-gray-800 text-md">
              <p><strong>Email:</strong> dshivakumar2031@gmail.com</p>
              <p><strong>Phone:</strong> +91 6281043752</p>
              <p>
                <strong>GitHub:</strong>
                <a href="https://github.com/Deshishiva" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/Deshishiva
                </a>
              </p>
            </div>

            <p className="text-gray-700 text-lg">Feel free to reach out!</p>
          </div>

        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../src/Contents/Esakkiammal2609.pdf";
import Projects from "../src/Contents/Projects";
import Footer from "../src/Contents/Footer";

function App() {
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    // Automatically trigger animation on load
    setIsProjectsVisible(true);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-blue-950">
            Esakkiammal Palanisamy
          </div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#projects"
                className="hover:text-blue-600 text-blue-950 font-bold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-600 text-blue-950 font-bold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Projects Section with Slide-in Animation */}
      <section
        id="projects"
        className={`bg-gray-700 text-white pt-16 flex flex-col items-center transform transition-transform duration-1000 ${
          isProjectsVisible ? "translate-x-0" : "translate-x-full"
        } gap-5`}
      >
        <div className="container mx-auto text-center">
          <h1 className="transparent-text text-4xl font-bold animate-fade-in mt-10">
            Esakkiammal Palanisamy
          </h1>
          <h2 className="transparent-text text-3xl mt-5 animate-slide-up">
            Full Stack Developer
          </h2>
          <p className="transparent-text italic mt-5 animate-slide-up-delayed">
            Passionate about building web applications and learning new
            technologies.
          </p>
          <div className="w-full">
            <Projects />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`bg-gray-900 text-white flex flex-col gap-10`}
      >
        <div className="container mx-auto flex-grow mt-10">
          <h2 className="text-4xl font-bold text-center mb-10">
            Skills & Contact Information
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            {/* Skills */}
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full md:w-1/2 mr-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Skills</h3>
              <p className="leading-relaxed">
                MERN Stack, Node.js, React.js, MySQL, MongoDB, Serverless
                Framework, AWS, Prisma, Sequelize, Tailwind CSS, React Native,
                Material UI, GraphQL, Express.js, API Payment Gateway, JWT, REST
                API
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full md:w-1/2 ml-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
              <p className="text-white">Email: esakkiammal2609@gmail.com</p>
              <p className="text-white">Phone: (638) 3788537</p>
              {/* Resume Section */}
              <div className="mt-4">
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-black transition duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-gray-800 p-7 rounded-lg shadow-lg mt-10 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Work Experience</h3>
            <div className="leading-relaxed flex flex-row">
              <div>
                <h4 className="text-2xl font-semibold">Full Stack Developer</h4>
                <p className="text-white">Forzo Tech Labs</p>
                <p className="text-gray-400">May 2023 - Present</p>
                <p className="mt-2">
                  Worked on developing scalable web applications, optimizing
                  system performance, and integrating APIs.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">Software Developer</h4>
                <p className="text-white">Mobius Knowledge and Services</p>
                <p className="text-gray-400">March 2022 - April 2023</p>
                <p className="mt-2">
                  Focused on developing robust server-side applications and
                  creating responsive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;

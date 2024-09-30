import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../Contents/Esakkiammal2609.pdf";

const HeaderSection = () => {
  return (
    <div className="box-one w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h1 className="transparent-text text-5xl font-bold animate-fade-in">
        Esakkiammal Palanisamy
      </h1>
      <p className="transparent-text text-3xl mt-4 animate-slide-up">
        Full Stack Developer
      </p>
      <p className="transparent-text italic mt-6 animate-slide-up-delayed">
        Passionate about building web applications and learning new
        technologies.
      </p>

      {/* Role Descriptions */}
      <section className="mt-6 animate-fade-in-delayed">
        <h2 className="transparent-text text-4xl font-bold mb-4">
          Role Descriptions
        </h2>
        <p className="transparent-text leading-relaxed">
          As a Full Stack Developer, I specialize in both front-end and back-end
          development. My experience includes building responsive web
          applications, managing databases, and ensuring seamless API
          integration.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-8 animate-fade-in-delayed">
        <h2 className="transparent-text text-4xl font-bold mb-4">Skills</h2>
        <p className="transparent-text leading-relaxed">
          MERN Stack, Node JS, React JS, MySQL, MongoDB, Serverless Framework,
          AWS, Prisma, Sequelize, Tailwind CSS, React Native, Material UI,
          GraphQL, Express JS, API Payment Gateway, JWT, REST API
        </p>
      </section>

      {/* Links Section */}
      <div className="mt-8 flex justify-center space-x-6 animate-fade-in-delayed">
        <a
          href="https://github.com/esakki2609"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-200"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/esakkiammal-palanisamy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-200"
        >
          <FaLinkedin className="text-3xl" />
        </a>
      </div>

      {/* Resume Section */}
      <div className="mt-8 animate-fade-in-delayed">
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
  );
};
export default HeaderSection;

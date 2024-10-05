import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../ApplicationImages/echeck1.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const projectData = [
  {
    title: "Echeck-Insurance",
    images: [
      require("../ApplicationImages/echeck1.jpeg"),
      require("../ApplicationImages/echeck2.jpeg"),
      require("../ApplicationImages/echeck3.jpeg"),
      require("../ApplicationImages/echeck4.jpeg"),
      require("../ApplicationImages/echeck5.jpeg"),
      require("../ApplicationImages/echeck6.jpeg"),
      require("../ApplicationImages/echeck7.jpeg"),
      require("../ApplicationImages/echeck8.jpeg"),
      require("../ApplicationImages/echeck9.jpeg"),
    ],
    description:
      "As a Full Stack Developer for the e-check application, I used Node.js, React.js, AWS, MySQL, and Prisma to build the application and manage infrastructure. I collaborated with teams using agile methodologies to deliver high-quality solutions.",
  },
  {
    title: "On the Stage",
    images: [
      require("../ApplicationImages/ots1.jpeg"),
      require("../ApplicationImages/ots2.jpeg"),
      require("../ApplicationImages/ots3.jpeg"),
      require("../ApplicationImages/ots4.jpeg"),
      require("../ApplicationImages/ots5.jpeg"),
      require("../ApplicationImages/ots6.jpeg"),
      require("../ApplicationImages/ots7.jpeg"),
    ],
    description:
      "I developed On the Stage using Node.js, React.js, Azure DevOps, MySQL, MongoDB, and integrated RESTful APIs to ensure smooth functionality. Managed key aspects of the project lifecycle independently and engaged with clients.",
  },
];

const ProjectsSection = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeProjectImages, setActiveProjectImages] = useState([]);

  const openModal = (images) => {
    setActiveProjectImages(images);
    setCurrentImage(0);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const navigateImage = (direction) => {
    setCurrentImage((prev) =>
      direction === "prev"
        ? prev === 0
          ? activeProjectImages.length - 1
          : prev - 1
        : prev === activeProjectImages.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <div className="box-two w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-white mb-3">Projects</h2>
      <div className="flex flex-col space-y-4">
        {projectData.map(({ title, images, description }) => (
          <div
            key={title}
            className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <span
              onClick={() => openModal(images)}
              className="text-red-950 font-bold mb-2 hover:text-gray-900 cursor-pointer transition duration-200"
            >
              View the Application Screenshots
            </span>
            <p className="text-white">{description}</p>
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={closeModal}
        center
        classNames={{
          modal: "modal-custom",
          overlay: "bg-black bg-opacity-75",
        }}
        styles={{
          modal: {
            width: "80vw",
            height: "75vh",
            maxHeight: "75vh",
            overflow: "hidden",
            borderRadius: "8px",
          },
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={activeProjectImages[currentImage]}
            alt="Screenshot"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 p-3 rounded-full"
            onClick={() => navigateImage("prev")}
          >
            <FaArrowLeft className="text-white text-xl" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 p-3 rounded-full"
            onClick={() => navigateImage("next")}
          >
            <FaArrowRight className="text-white text-xl" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

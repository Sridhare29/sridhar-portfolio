import React from "react";
import { useNavigate } from "react-router-dom";
import mypic from "../../assets/Sridhar_img.jpg";

function AccordionLeft() {
  const navigate = useNavigate();

  const accordionData = [
    { Maintitle: "EXPLORE" },
    { title: "About", path: "/about" },
    { title: "Work", path: "/work" },
    { title: "Projects", path: "/projects" },
    { title: "Community", path: "/community" },
    { title: "Get In Touch", path: "/contact" },
    { Maintitle: "QUICK LINKS" },
    { title: "Twitter / X", path: "https://x.com" },
    { title: "LinkedIn", path: "https://linkedin.com" },
    { title: "Github", path: "https://github.com" },
    { title: "Read CV", path: "/cv" },
  ];

  const handleNavigation = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col bg-white w-[23%]">
      {/* Profile Section */}
      <div className="flex mb-2 justify-center w-full">
        <div className="flex md:justify-start p-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={mypic} className="w-18 rounded-full shadow-lg" alt="Sridhar" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-lg p-2 text-start font-medium text-gray-900">
            Sridhar Elumalai
          </h1>
          <p className="flex px-2 text-gray-600 font-mono">Full Stack Developer</p>
        </div>
      </div>

      {/* Accordion Links */}
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`w-full mb-2 px-4 rounded ${item.path ? "cursor-pointer hover:bg-gray-100" : ""}`}
          onClick={() => item.path && handleNavigation(item.path)}
        >
          <div className="flex justify-start text-md text-start p-2">
            {item.Maintitle ? (
              <span className="font-medium text-gray-700">{item.Maintitle}</span>
            ) : (
              <span className="ml-4 text-[#9ca3cf] font-mono">{item.title}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionLeft;

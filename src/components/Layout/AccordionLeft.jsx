import React, { useState } from "react";
import mypic from "../../assets/Sridhar_img.jpg";

function AccordionLeft() {
  const accordionData = [
    { Maintitle: "EXPLORE", content: "This is the details content" },
    { title: "About", content: "This is the bar content" },
    { title: "Work", content: "This is the bar content" },
    { title: "Projects", content: "This is the bar content" },
    { title: "Community", content: "This is the bar content" },
    { title: "Get In Touch", content: "This is the bar content" },
    { Maintitle: "QUICK LINKS", content: "This is the details content" },
    { title: "Twitter / X", content: "This is the bar content" },
    { title: "LinkedIn", content: "This is the bar content" },
    { title: "Github", content: "This is the bar content" },
    { title: "Read CV", content: "This is the bar content" },
  ];

  return (
    <div className="flex flex-col bg-white w-[23%]">
      <div className="flex mb-2 w-full">
        <div className="flex md:justify-start p-2">
          <img
            src={mypic}
            className=" w-18 rounded-full shadow-lg"
            alt="Sridhar"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg p-2 text-start font-medium text-gray-900">
            Sridhar Elumalai
          </h1>
          <p className="flex px-2 text-gray-600 font-mono">Full Stack Developer</p>
        </div>
      </div>
      {accordionData.map((item, index) => (
        <div key={index} className="w-full mb-2 px-4 rounded">
          <div className="flex justify-start text-md  text-start p-2">
            <div className="flex justify-start font-medium text-gray-700">
              <span>{item.Maintitle}</span>
            </div>
            <div className="flex ml-4 text-[#9ca3cf] font-mono justify-start">
              <span>{item.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AccordionLeft;

import React from "react";
import mypic from "../../assets/Sridhar_img.jpg";

function Home() {
  return (
    <div className="flex items-start p-4 h-screen">
      <div className="fle p-2 justify-center">
        <img
          src={mypic}
          className=" xl:lg:w-[200px] sm:md:w-[100px]  rounded-2xl"
          alt="sridhar"
        />
      </div>
      <div className="flex flex-col mx-12 p-4">
        <h1 className="text-2xl font-bold text-start text-gray-900">
          Hey There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-start text-gray-900">
          Sridhar Elumalai
        </h2>
        {/* <h3 className='text-start text-lg text-gray-600'>
          Full Stack Developer
        </h3> */}
        <p className="flex text-start text-sm py-2 text-gray-600">
          I’m a Full Stack Developer Advocate with 3+ years of experience
          exploring technologies across Web and App. I love crafting solutions
          and sharing knowledge to empower developers worldwide.
        </p>
        <div className="flex justify-start p-4">
          <button className="bg-[#8E57FD] hover:bg-bg-[#8D55E9]-300 m-4 text-white font-bold py-2 px-4 rounded">
            About
          </button>
          <button className="bg-[#8D55E9] hover:bg-c-300 text-white m-4 font-bold py-2 px-4 rounded">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

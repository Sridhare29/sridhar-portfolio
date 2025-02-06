import React from "react";
import mypic from "../../../assets/Sridhar_img.jpg";
import DescriptionCard from "../../Layout/DescriptionCard";

function Home() {
    const DetailsInfo = [
        { title: "Professional Journey", icon: "💼" ,description: "I’m a Full Stack Developer at Kanini Software Solutions, working on scalable web applications. My work involves architecting backend solutions, optimizing frontend performance, and collaborating across teams to deliver efficient and user-friendly products." },
        { title: "Personal Projects",  icon: "💻",description: "Beyond my professional role, I actively explore React, Redux, and .NET Core, refining my skills in CQRS, performance optimization, and feature flag management. I’m also focused on building reusable components and enhancing application architecture for seamless user experiences. Stay tuned for my latest updates!" },
      ];
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 w-full">
                <div className="flex justify-center md:justify-start">
                    <img
                        src={mypic}
                        className="w-32 md:w-48 lg:w-64 rounded-lg shadow-lg"
                        alt="Sridhar"
                    />
                </div>
                <div className="flex flex-col md:mx-6 px-8 py-4 bg-white rounded-lg shadow-md mt-6 md:mt-0">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-start text-gray-900">
                        Hey There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-start text-gray-900 mt-2">
                        Sridhar Elumalai
                    </h2>
                    <p className="text-start text-sm md:text-base lg:text-lg font-mono text-gray-600 mt-4">
                        I’m a Full Stack Developer Advocate with 3+ years of experience
                        exploring technologies across Web and App.
                    </p>
                    <div className="flex justify-start mt-6">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                            About
                        </button>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold py-2 px-4">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-6 bg-gray-100">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-start text-gray-900">
                    What I've Been Up To...
                </h1>
                <div className="flex justify-between gap-4  mt-6">
                    {DetailsInfo.map((info)=> (<DescriptionCard title={info.title} Icon={info.icon} description={info.description}/>))}
                </div>
            </div>
        </div>
    );
}

export default Home;

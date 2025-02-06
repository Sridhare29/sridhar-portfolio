import React from "react";
import mypic from "../../../assets/Sridhar_img.jpg";
import DescriptionCard from "../../Layout/DescriptionCard";

function Home() {
    const DetailsInfo = [
        { title: "Professional Journey", icon: "💼", description: "I'm a Full Stack Developer at Kanini Software Solutions, working on scalable web applications. My work involves architecting backend solutions, optimizing frontend performance, and collaborating across teams to deliver efficient and user-friendly products." },
        { title: "Personal Projects", icon: "💻", description: "Beyond my professional role, I actively explore React, Redux, and .NET Core, refining my skills in CQRS, performance optimization, and feature flag management. I'm also focused on building reusable components and enhancing application architecture for seamless user experiences. Stay tuned for my latest updates!" },
    ];


    return (
        <div className="min-h-screen">
            {/* Hero Section with Glassmorphism */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r"></div>
                <div className="container mx-auto px-6 py-12">
                    <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-8 shadow-md">
                        <div className="flex flex-col md:flex-row items-center space-x-8">
                            {/* Profile Image with Animation */}
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <img
                                    src={mypic}
                                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg transform hover:scale-105 transition duration-500"
                                    alt="Sridhar"
                                />
                            </div>

                            {/* Introduction Text */}
                            <div className="flex-1 space-y-6 text-center md:text-left mt-6 md:mt-0">
                                <div className="space-y-2">
                                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text bg-gradient-to-r from-grey-700 to-grey-600">  
                                        Hey There! 
                                        <span className="wave inline-block ml-2 animate-bounce" role="img" aria-labelledby="wave">
                                            👋🏻
                                        </span>
                                    </h1>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sridhar Elumalai</h2>
                                </div>
                                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                    Full Stack Developer Advocate with 3+ years of experience
                                    exploring technologies across Web and App.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200">
                                        About Me
                                    </button>
                                    <button className="px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 border-2 border-indigo-600">
                                        Get in Touch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Cards Section */}
            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                My Journey So Far...
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {DetailsInfo.map((info, index) => (
                        <DescriptionCard key={index} title={info.title} icon={info.icon} description={info.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
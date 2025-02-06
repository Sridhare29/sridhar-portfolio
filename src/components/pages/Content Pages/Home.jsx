import React from "react";
import mypic from "../../../assets/Sridhar_img.jpg";

function Home() {
return (
    <div className="flex w-full h-screen">
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 w-full bg-gray-100">
            <div className="flex justify-center md:justify-start">
                <img
                    src={mypic}
                    className="w-32 md:lg:w-64 rounded-lg shadow-lg"
                    alt="Sridhar"
                />
            </div>
            <div className="flex flex-col md:mx-6 px-8 py-4 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-start text-gray-900">
                    Hey There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-start text-gray-900 mt-2">
                    Sridhar Elumalai
                </h2>
                <p className="text-start text-sm font-mono md:text-base text-gray-600 mt-4">
                    I’m a Full Stack Developer Advocate with 3+ years of experience
                    exploring technologies across Web and App. 
                </p>
                <div className="flex justify-start mt-6">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
                        About
                    </button>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold py-2 px-4 ">
                        Get in Touch
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Home;

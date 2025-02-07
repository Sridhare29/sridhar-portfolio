import React from "react";

function DescriptionCard({ title, icon, description }) {
  return (
    <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-2xl text-purple-400">{icon}</span>
        <h3 className="text-xl font-semibold ">{title}</h3>
      </div>

      <div className="h-px w-1/4 bg-gradient-to-r from-purple-400 to-transparent mb-4"></div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default DescriptionCard;

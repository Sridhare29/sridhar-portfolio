import React from 'react'

function DescriptionCard(props) {
  return (
    <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
    <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{props.title}</h3>
        <span className="text-4xl group-hover:scale-125 transition duration-300">{props.icon}</span>
    </div>
    <p className="text-gray-600 leading-relaxed">{props.description}</p>
</div>
  )
}

export default DescriptionCard

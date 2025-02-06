import React from 'react'

function DescriptionCard(props) {
  return (
    <div className='flex flex-col h-[100%] w-[50%] border-2 border-gray-300 bg-white rounded-lg p-4'>
     <div className='flex justify-between pb-2'>
     <h1 className='text-2xl font-sans font-bold'>
            {props.title}
      </h1>
      <span className='flex'>
        {props.Icon}
      </span>
     </div>
      <p className='flex '>{props.description}</p>
    </div>
  )
}

export default DescriptionCard

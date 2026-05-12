import React from 'react'

const Card = (props) => {
  return (
     <div className="text-black bg-gray-300 p-5 w-60 sm:w-60 md:w-75 min-h-50 border-none rounded-[10px] overflow-hidden">

          <h1 className='text-2xl sm:text-3xl border-b-2 p-1 mb-4 overflow-hidden wrap-normal whitespace-pre-wrap'>{props.title}</h1>
          <p className='sm:text-lg wrap-anywhere whitespace-pre-wrap'>{props.detail}</p>
        </div>

  )
}

export default Card

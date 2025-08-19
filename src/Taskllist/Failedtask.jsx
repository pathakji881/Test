import React from 'react'

const Failedtask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-4 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className='px-3 p-4 h-10 text-xl'>{data.taskTitle}M </h2>
        <p className="text-sm mt-2">
               {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Failedtask</button>
        </div>
      </div>
  )
}

export default Failedtask
import React, { useContext } from "react";
import { AuthContext } from "../context/Authprovider";

const Alltask = () => {

  const authData = useContext(AuthContext)
    

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 ">
      <div className="bg-red-400 py-3 mb-5 px-4 flex justify-between rounded">
        <h2 className='w-1/5 bg-red-500'>Employees Name</h2>
        <h3  className='w-1/5 bg-red-500'>New Task</h3>
        <h5  className='w-1/5 bg-red-500'>Active Task</h5>
        <h5  className='w-1/5 bg-red-500'>Completed</h5>
        <h5  className='w-1/5 bg-red-500'>Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
              {authData.employees.map(function(elem,idx){

        return    <div key={idx} className="border-2 border-emerald-500 py-3 mb-5 px-4 flex justify-between rounded">
        <h2 className='text-lg font-medim w-1/5'>{elem.firstName}</h2>
        <h3  className='text-lg font-medim w-1/5 text-blue-600'>{elem.taskCounts.active}</h3>
        <h5  className='text-lg font-medim w-1/5 text-green-400'>{elem.taskCounts.newTask}</h5>
        <h5  className='text-lg font-medim w-1/5 text-white-'>{elem.taskCounts.completed}</h5>
        <h5  className='text-lg font-medim w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>

      </div>
      })}
      </div>
    </div>
  );
};

export default Alltask;

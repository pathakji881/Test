import React, { useState } from 'react';
import Newtask from './Newtask';

const Createtask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const data =JSON.parse(localStorage.getItem('employees'))
    // console.log(data);

    data. foeEach(function (elem) {
      if(assignTo == elem.firstdnName) {
        elem.task.push({data})
        console.log(elem);
      }
    })



    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setTaskDescription('')
    setTaskTitle('')


    console.log({
      taskTitle,
      taskDate,
      assignTo,
      category,
      taskDescription}
    );
  };

  return (
    <div className="px-5 flex-wrap bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex py-2 w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-xl text-gray-300 py-2 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded border border-gray-300"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-xl text-gray-300 py-2 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded border border-gray-300"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-xl text-gray-300 py-2 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded border border-gray-300"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-xl text-gray-300 py-2 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded border border-gray-300"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl text-gray-300 py-2 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-300"
            rows="10"
            cols="35"
            placeholder="Make a UI design..."
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 py-3 hover:bg-green-400 px-5 rounded text-xl mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createtask;

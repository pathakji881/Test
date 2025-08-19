import React from "react";
import Header from "../Other/Header";
import Createtask from "../Taskllist/Createtask"; 
import Alltask from "../Taskllist/Alltask";

const AdminDashboars = ({data}) => {



// console.log(data)

  return (
    <div className="h-screen w-full p-7">
      <Header />
      <Createtask />
      <Alltask />
    </div>
  );
};

export default AdminDashboars;

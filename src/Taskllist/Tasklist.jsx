import React from "react";
import Acceptask from "./Acceptask";
import Newtask from "./Newtask";
import Failedtask from "./Failedtask";

const Tasklist = ({data}) => {
 
// console.log(data)
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10" >
        {data.tasks.map((elem,idx)=>{
           
          if(elem.active){
            return <Acceptask key={idx} data={elem} />
          }
          if(elem.newTask){
            return <Newtask key={idx} data={elem} />
          }
          if(elem.completed){
            return <Complettask key={idx} data={elem} />
          }
          if(elem.failed){
            return <Failedtask key={idx} data={elem} />
          }
        })}
    

    </div>
  );
};

export default Tasklist;

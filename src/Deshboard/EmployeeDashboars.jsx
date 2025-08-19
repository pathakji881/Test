import React from 'react'
import Header from '../Other/Header'
import Tasklistnumber from '../context/Tasklistnumber';
import Tasklist from '../Taskllist/Tasklist';

export const EmployeeDashboars = (props) => {

  return (
    <div className='p-10 pg-[1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Tasklistnumber data={props.data}/>
        <Tasklist data={props.data}/>
     </div>
 
  )
}
export default EmployeeDashboars;
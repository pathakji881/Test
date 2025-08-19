import React from 'react'
import { setLocalstorage } from '../utils/localstorage'

const Header =({data}) => {

// const [ username, setusername] = useState('')

// if(!data){
//   setusername('Admin')
// }else{
//   setusername(data.firstName)
// }




const logoutuser  =()=>{
  localStorage.setItem('loggedInuser','')
  // console.log(props.changeUser);
  window.location.reload()
}


  return (
    <div className='flex items-end p-6 justify-between'>
        <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>Username😎</span></h1>
        <button onClick={logoutuser} className='bg-red-500 text-white rounded p-2 font-medium'>Log Out</button>
    </div>
  )
}

export default Header;
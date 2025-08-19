import React, { useEffect, useState, useContext } from 'react';
import Login from './Auth/Login';
import Header from './Other/Header';
import EmployeeDashboars from './Deshboard/EmployeeDashboars';
import AdminDashboars from './Deshboard/AdminDashboars';
import { AuthContext } from './context/Authprovider';
import { setLocalstorage } from './utils/localstorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  




 useEffect(() => {
    const loggedInUser = localStorage.setItem('logggedInUser','')

    if(loggedInUser){
      const UserData = JSON.parse(loggedInUser)
    setUser(UserData.role) 
    setLoggedInUserData(UserData.data)
      
  }
 }, [])
 


  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employees = authData.employees.find((e) =>email == e.email && e.password == password)
      if(employees){
      setUser('employees')
      setLoggedInUserData(employees)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',data:employees}))
      }
    }
    else {
      alert("Invalid Credentials");
    }
  }




  return(
 <>
   {!user && <Login handleLogin={handleLogin} />}
  
   {user === 'admin' && <AdminDashboars change={setUser}  />}
  
   {user === 'employees' && ( <EmployeeDashboars change={setUser}  data={LoggedInUserData} />)}
 </>)
};

export default App;

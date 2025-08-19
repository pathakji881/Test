import React, { createContext, useEffect, useState } from "react";
import { getLocalstorage, setLocalstorage } from "../utils/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
// localStorage.clear()

  useEffect(() => {
    setLocalstorage()
    const { employees,admin} = getLocalstorage()
    setUserData({employees,admin})
  }, [])

  return (
  <div>
     <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
  </div>
   
  );
};

export default AuthProvider;

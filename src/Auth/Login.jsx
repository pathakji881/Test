import React, { useActionState, useState } from "react";

const Login = ({handleLogin}) => {

  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setemail("");
    setpassword("");
  };

  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-4 rounded-xl p-10 px-8 py-25 border-emerald-600">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              className="text-white outline-none bg-transparent py-3 px-5 border-2 border-emerald-500 rounded-full"
              type="email"
              placeholder="Enter your email"
            ></input>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
              className="text-white outline-none bg-transparent py-3 px-5 border-2 border-emerald-500 mt-5 rounded-full"
              type="password"
              placeholder="Enter password"
            ></input>
            <button className="text-white outline-none bg-emerald-500 mt-6 w-full rounded-full border-5 border-emerald-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

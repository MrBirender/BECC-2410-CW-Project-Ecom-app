import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler= (event)=> {
    event.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className="w-[90%] sm:w-96 m-auto items-center flex flex-col gap-4 mt-14 text-slate-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="w-8 h-[1.5px] border-none bg-gray-800" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-800 px-4 py-2 w-full flex-1"
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-800 px-4 py-2 w-full flex-1"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-800 px-4 py-2 w-full flex-1"
        required
      />
      <div className="flex justify-between w-full text-sm mt-[-8px] ">
        <p className="cursor-pointer">{currentState === "Login" && ' Forgot your password ?'}</p>
        {currentState === "Login" ? <p onClick={()=> setCurrentState('Sign Up')} className="cursor-pointer">Create Account</p> : <p onClick={()=> setCurrentState('Login')} className="cursor-pointer">Login Here</p>}
      </div>
      <button className="bg-black text-white px-8 py-2 mt-4 text-light">{currentState === "Login" ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
};

export default Login;

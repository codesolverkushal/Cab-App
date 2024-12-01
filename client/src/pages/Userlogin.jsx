import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userData,setUserData] = useState({});

  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-17 mb-1"
          src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="enter your password"
            required
          />
          <button className="bg-[#111111] rounded px-4 py-2 font-semibold mb-2 border w-full text-white text-lg placeholder:text-base">
            Login
          </button>
          
        </form>
        <p className="mb-1 text-center text-gray-600">
            Don't Have Account?{" "}
           <Link className="text-blue-500 hover:text-blue-700 cursor-pointer font-medium" to={"/signup"}>Sign Up</Link>
          </p>
      </div>

      <div>
        <Link to='/captain-login' className="inline-block text-center bg-[#c6a038] rounded px-4 py-2 border w-full text-white text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;

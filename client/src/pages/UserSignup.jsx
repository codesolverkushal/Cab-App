import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {UserDataContext} from "../context/UserContext";

const UserSignup = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [userData,setUserData] = useState({});


  const navigate = useNavigate()
  const {user,setUser} = useContext(UserDataContext);

  const submitHandler = async (e)=>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
    if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }
    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
  }
  return (
    <div className="p-7 flex h-screen flex-col justify-between">
      <div>
        <img
          className="w-17"
          src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-xl mb-2">Name</h3>
          <div className="flex gap-2 mb-7">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="enter your password"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="bg-[#111111] rounded px-4 py-2 font-semibold mb-2 border w-full text-white text-lg placeholder:text-base">
           Sign Up
          </button>
        </form>
        <p className="mb-1 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            className="text-blue-500 hover:text-blue-700 cursor-pointer font-medium"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>

      <div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
  <p className="text-gray-800 text-center font-medium">
    If you encounter any issues, feel free to reach out to us at {" "}
    <a href="mailto:kushal@gmail.com" className="text-blue-600 hover:underline">
      kushal@gmail.com
    </a>
  </p>
</div>

      </div>
    </div>
  );
};

export default UserSignup;

import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const Captainlogin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const {captain,setCaptain} = useContext(CaptainDataContext);

  const submitHandler = async (e)=>{
    e.preventDefault();
    const captainData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }


    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 flex h-screen flex-col justify-between">
    <div>
    <div className="mb-7">
        <img
          className="w-17 relative"
          src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png"
          alt=""
        />
        <h3 className="left-64 top-32 absolute text-3xl font-bold ">Captain</h3>
        </div>
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
          Start Your Business?{" "}
         <Link className="text-blue-500 hover:text-blue-700 cursor-pointer font-medium" to="/captain-signup">Sign Up</Link>
        </p>
    </div>

    <div>
      <Link to='/login' className="inline-block text-center bg-[#c6a038] rounded px-4 py-2 border w-full text-white text-lg placeholder:text-base">
        Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default Captainlogin
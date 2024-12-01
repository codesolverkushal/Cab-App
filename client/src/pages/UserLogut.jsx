import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogut = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`,{
        headers:{
            Authorization: `Bearere ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            localStorage.removeItem('token')
            navigate('/login')
        }
    })

  return (
    <div>UserLogut</div>
  )
}

export default UserLogut
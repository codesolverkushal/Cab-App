import React from 'react'
import { img1, img2 } from '../assests/image'

const Home = () => {
  return (
    <div>
        <img className='w-20 absolute left-5 top-7' src={img1} alt="" />
        <div className='h-screen w-screen'>
          <img className='h-full w-full object-cover' src={img2} alt="" />
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Home
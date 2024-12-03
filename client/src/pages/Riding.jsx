import React from 'react'
import { Link } from 'react-router-dom';
const img4 = "https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif";
const img1 = "https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg";
const Riding = () => {
  return (
    <div className='h-screen'>
      <h1 className='absolute left-5 top-4 text-3xl font-semibold'>Uber</h1>
      <Link to="/home" className='fixed h-10 w-10 bg-violet-50 flex items-center justify-center rounded-full right-2 top-4'>
        <i className='ri-home-5-line text-xl font-semibold'></i>
      </Link>
        <div className="h-1/2">
           <img className='h-full w-full object-cover' src={img4} alt="" />
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
        <img 
          className='h-12' 
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" 
          alt="Driver" 
        />
         <div className='text-right'>
          <h2 className='text-lg font-bold capitalize text-gray-800'>John Doe</h2>
          <h4 className='text-xl font-semibold text-gray-700 mt-1'>AB12CD3456</h4>
          <p className='text-sm text-gray-500 mt-1'>Maruti Suzuki Alto</p>
          <h1 className='text-xl font-bold text-gray-800 mt-2'>OTP: 1234</h1>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>123 Main Street</h3>
              <p className='text-sm -mt-1 text-gray-600'>Destination</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹250</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash</p>
            </div>
          </div>
        </div>
      </div>
             <button className='w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg'>Make a payment</button>
        </div>
    </div>
  )
}

export default Riding
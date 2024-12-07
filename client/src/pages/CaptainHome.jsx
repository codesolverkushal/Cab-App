import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
const img1 =
  "https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg";

const CaptainHome = () => {

   const [ridePopupPanel,setRidePopupPanel] = useState(true);
   const ridePopupPanelRef = useRef(null);
   useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform: 'translateY(0)'
      })
    } else{
      gsap.to(ridePopupPanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
   },[ridePopupPanel])

  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <h1 className="w-20  left-5 top-7 text-5xl font-medium">Uber</h1>
        <Link
          to="/captain-home"
          className=" h-14 w-14 bg-blue-400 text-white flex items-center justify-center rounded-full"
        >
          <i className="text-xl font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
         <CaptainDetails setRidePopupPanel={setRidePopupPanel}/>
      </div>
      
      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12">
          <RidePopUp setRidePopupPanel={setRidePopupPanel}/>
      </div>


    </div>
  );
};

export default CaptainHome;

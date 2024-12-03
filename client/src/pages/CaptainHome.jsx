import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
const img1 =
  "https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg";

const CaptainHome = () => {
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

      <div className="h-2/5 p-6 translate-y-full">
         <CaptainDetails/>
      </div>
      
      <div className="fixed w-full z-10 bottom-0  bg-white px-3 py-10 pt-12">
          <RidePopUp/>
      </div>


    </div>
  );
};

export default CaptainHome;

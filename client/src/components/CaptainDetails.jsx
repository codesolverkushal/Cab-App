import React from "react";

const CaptainDetails = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-between gap-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SieSDnaZtBEq5mYqs-QZEOMuiED6aC6X0Q&s"
            alt=""
          />
          <h4 className="text-xl font-semibold text-gray-800">John Boe</h4>
        </div>
        <div>
          <h4 className="font-bold text-xl text-green-600">$6</h4>
          <p className="text-sm text-gray-500">Earning</p>
        </div>
      </div>
      <div className="flex p-6 mt-8 bg-gray-100 rounded-md shadow-lg justify-center gap-5 items-start">
        <div className="text-center">
          <i className="text-2xl font-thin ri-timer-2-line text-blue-500"></i>
          <h5 className="text-lg font-medium text-gray-800">10</h5>
          <p className="text-sm text-gray-600">Hour's Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-speed-up-line text-orange-500"></i>
          <h5 className="text-lg font-medium text-gray-800">50 km/h</h5>
          <p className="text-sm text-gray-600">Average</p>
        </div>
        <div className="text-center">
          <i className="text-2xl font-thin ri-booklet-line text-purple-500"></i>
          <h5 className="text-lg font-medium text-gray-800">Nothing</h5>
          <p className="text-sm text-gray-600">Special</p>
        </div>
      </div>
      <button onClick={()=> props.setRidePopupPanel(true)} className="w-full mt-5 bg-gradient-to-r from-green-500 to-green-700 text-gray-100 font-semibold p-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
        Check Your Ride
      </button>
    </div>
  );
};

export default CaptainDetails;

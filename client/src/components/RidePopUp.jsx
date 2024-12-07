import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer"
        onClick={() => props.setRidePopupPanel(false)}
      >
        <i className="text-3xl text-gray-400 hover:text-gray-100 transition-colors ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-3xl font-bold mb-5 text-center text-green-500">
        Ride For You!
      </h3>
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-200 via-violet-200 to-yellow-200 p-4 rounded-lg shadow-lg">
         <div className="flex items-center gap-4">
            <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SieSDnaZtBEq5mYqs-QZEOMuiED6aC6X0Q&s" alt="" />
            <h1 className="text-xl font-bold">John Doe</h1>
         </div>
         <h2 className="text-xl font-bold">2.2 km</h2>
      </div>

      <div className="flex gap-4 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b border-gray-700">
            <i className="text-green-400 text-2xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-400">Pickup Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b border-gray-700">
            <i className="text-green-400 text-2xl ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">123/45-B</h3>
              <p className="text-sm -mt-1 text-gray-400">Destination</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-green-400 text-2xl ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹200</h3>
              <p className="text-sm -mt-1 text-gray-400">Cash</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-gradient-to-r from-green-500 to-green-700 text-gray-100 font-semibold p-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
          Confirm
        </button>
        <button className="w-full mt-5 bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold p-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all">
          Reject
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;

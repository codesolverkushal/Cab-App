import React from "react";

const LocationPanel = (props) => {
  const locations = [
    "Sector 58, Bishanpura Village, Gautam Buddha Nagar",
    "123 Main Street, Springfield",
    "456 Elm Street, Metropolis",
    "789 Maple Avenue, Gotham City",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanel(false);
          }}
          className="flex items-center my-2 space-x-4 p-4 bg-gray-50 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10">
            <i className="ri-map-pin-fill text-xl"></i>
          </div>
          <h4 className="text-gray-700 font-semibold text-sm md:text-base">
            {location}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default LocationPanel;

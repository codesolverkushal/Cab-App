import React, { useRef, useState } from "react";
import { img1, img2 } from "../assests/image";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationPanel from "../components/LocationPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const [vehiclePanel,setVehiclePanel] = useState(false)
  const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
  const [lookingForDriver,setLookingForDriver] = useState(false);

  const panelRef = useRef();
  const panelCloseRef = useRef();
  const vehiclePanelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const lookingForDeriverRef = useRef(null);
 

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    const panelElement = panelRef.current; // Ensure the ref is correct

    if (panel) {
      gsap.to(panelElement, {
        height: "70%",
        padding:24
      });
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    } else {
      gsap.to(panelElement, {
        height: "0%",
        padding:0
      });
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  }, [panel]);

  useGSAP(function () {
    if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ vehiclePanel ])

  useGSAP(function () {
    if (lookingForDriver) {
        gsap.to(lookingForDeriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(lookingForDeriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ lookingForDriver ])

  useGSAP(function () {
    if (confirmRidePanel) {
        gsap.to(confirmRideRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(confirmRideRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ confirmRidePanel ])

  

  return (
    <div className="h-screen relative overflow-hidden">
      {/* <img className='w-20 absolute left-5 top-7' src={img1} alt="" /> */}
      <h1 className="w-20 absolute left-5 top-7 text-5xl font-medium">Uber</h1>
      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src={img2} alt="" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="bg-white bottom-0 w-full p-6 rounded-t-3xl shadow-lg">
          <h5 ref={panelCloseRef} onClick={()=> setPanel(false)} className="absolute right-6 top-6 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Request a ride now
          </h2>
          <form className="space-y-4" onSubmit={submitHandler}>
            <div className="flex items-center bg-gray-100 rounded-lg p-3">
              <span className="text-gray-400 mr-3">📍</span>
              <input
                type="text"
                onClick={() => setPanel(true)}
                placeholder="Enter pickup location"
                className="flex-1 bg-transparent outline-none"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
              <span className="text-gray-400">➤</span>
            </div>

            <div className="flex items-center bg-gray-100 rounded-lg p-3">
              <span className="text-gray-400 mr-3">📌</span>
              <input
                type="text"
                onClick={() => setPanel(true)}
                placeholder="Enter destination"
                className="flex-1 bg-transparent outline-none"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full bg-black text-white text-lg font-medium py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Request now
              </button>
              <Link
                to="/"
                className="inline-block text-center w-full bg-gray-100 text-gray-700 text-lg font-medium py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Schedule for later
              </Link>
            </div>
          </form>
        </div>

        <div ref={panelRef} className="bg-white h-0">
          <LocationPanel panel={panel} setPanel={setPanel} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>

      
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
            <VehiclePanel setPanel={setPanel} setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>

      <div ref={confirmRideRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
            <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setLookingForDriver={setLookingForDriver}/>
      </div>

      <div ref={lookingForDeriverRef} className='fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12'>
            <LookingForDriver setLookingForDriver={setLookingForDriver}/>
      </div>
      
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/taxi-online-service-with-map_1150-39387.jpg)",
          filter: "brightness(60%)",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      <header className="absolute top-6 left-8">
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-xl">
          Uber
        </h1>
        <p className="text-gray-200 mt-2 text-lg font-medium">
          Your journey starts here.
        </p>
      </header>

      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8">
        <div className="max-w-2xl text-left space-y-6">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Experience the <span className="text-yellow-400">future</span> of
            transportation.
          </h2>
          <p className="text-gray-300 text-lg">
            Reliable rides, effortless journeys. Discover the world of Uber, a
            seamless way to travel.
          </p>
          <Link
            to="/login"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-6 py-3 rounded-full transition-transform transform hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-8 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Uber. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Start;

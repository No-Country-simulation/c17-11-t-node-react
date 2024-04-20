import React from "react";
import backgroundImage from "../../../assets/bg.png";

interface HeroProps {
  title: string;
  description: string;
}

const HeroComponent: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <section
      className="bg-cover w-full h-screen bg-center relative  py-24 px-4 sm:px-6  lg:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0  bg-white opacity-35"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="lg:text-center lg:mt-28">
          <h3 className="lg:text-6xl text-5xl tracking-tight font-extrabold text-gray-800  ">
            {title}
          </h3>
          <p className="mt-4 lg:text-4xl text-4xl text-black">{description}</p>
          <div className="lg:mt-10 mt-6 space-x-3 space-y-3 ">
            <a
              href="/#nosotros"
              className="text-black bg-white hover:text-black/80 rounded-full px-8 py-4 text-lg  lg:text-2xl font-medium"
            >
              Nosotros
            </a>
            <a
              href="/register"
              className="text-black bg-[#F97D05] hover:text-black/80 rounded-full px-8 py-4 text-lg  lg:text-2xl font-medium"
            >
              Empezar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;

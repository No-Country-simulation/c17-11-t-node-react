import React, { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/60 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <a href="/#">
              <img className="rounded-full w-14" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex flex-grow">
            <ul className="flex space-x-4 mx-auto">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Opción 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Opción 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Opción 3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Opción 4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  Opción 5
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="#"
              className="text-white bg-slate-500 hover:text-black px-6 py-2 rounded-md text-sm font-medium"
            >
              Ingresar
            </a>
            <a
              href="#"
              className="text-gray-900 bg-slate-300 hover:text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              Registro
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Menú</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Acerca
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

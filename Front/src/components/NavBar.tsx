import { useState } from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FF9F00]/75 w-screen fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <div>
            <a href="/#">
              <img className="rounded-full w-14" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex flex-grow ">
            <ul className="flex  space-x-6">
              <li>
                <a
                  href="/#nosotros"
                  className="text-[#010101] hover:text-[#010101]/70 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="/#experiencias"
                  className="text-[#010101] hover:text-[#010101]/70 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Experiencias
                </a>
              </li>
              <li>
                <a
                  href="/#contacto"
                  className="text-[#010101] hover:text-[#010101]/70 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="/dashboard"
              className="text-[#010101] bg-white hover:text-[#010101]/80 px-6 py-2 rounded-full text-lg font-medium"
            >
              Ingresar
            </a>
            <a
              href="/register"
              className="text-[#010101] bg-[#F97D05] hover:text-[#010101]/80 rounded-full px-6 py-2  text-lg font-medium"
            >
              Registro
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#90A4AE] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <li>
            <a
              href="#"
              className="text-[#010101] hover:text-[#010101]/70 px-3 py-2 rounded-md text-lg font-medium"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#010101] hover:text-[#010101]/70 px-3 py-2 rounded-md text-lg font-medium"
            >
              Formar parte
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[#010101] hover:text-[#010101]/70 px-3 py-2 rounded-md text-lg font-medium"
            >
              Experiencias
            </a>
          </li>
          <div className=" md:flex items-center space-x-2 pt-6">
            <a
              href="#"
              className="text-[#010101] bg-white hover:text-[#010101]/80 px-6 py-2 rounded-full text-lg font-medium"
            >
              Ingresar
            </a>
            <a
              href="#"
              className="text-[#010101] bg-[#F97D05] hover:text-[#010101]/80 rounded-full px-6 py-2  text-lg font-medium"
            >
              Registro
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

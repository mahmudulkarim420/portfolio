import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa6';
import { FaCode } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const links = [
    {
      name: (
        <span className="flex items-center gap-2">
          <IoHomeOutline className="text-lg" /> Home
        </span>
      ),
      path: '/',
    },
    {
      name: (
        <span className="flex items-center gap-2">
          <FaCode className="text-lg" /> Skills
        </span>
      ),
      path: '/skills',
    },
    {
      name: (
        <span className="flex items-center gap-2">
          <FaLaptopCode className="text-lg" /> Projects
        </span>
      ),
      path: '/projects',
    },
    {
      name: (
        <span className="flex items-center gap-2">
          <HiOutlineMail className="text-lg" /> Contact
        </span>
      ),
      path: '/contact',
    },
  ];

  return (
    <nav className="sticky top-4 z-50 flex justify-center">
      <div
        className=" bg-blue-900 shadow-xl
        border border-blue-700 rounded-full px-6 md:px-10
        w-[92%] md:w-[45%] h-16 flex items-center justify-between
        transition-all duration-300 hover:shadow-2xl"
      >
        <NavLink to="/" className="text-xl font-bold text-white lg:hidden">
          <img src={logo} alt="Logo" className="h-10 rounded-full" />
        </NavLink>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-1 rounded-3xl font-medium transition duration-300
     ${
       isActive
         ? 'bg-gray-300 text-gray-600 shadow-md scale-105'
         : 'text-gray-200 hover:text-blue-400 hover:bg-blue-800/40'
     }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:hidden relative dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
          </label>

          <ul
            tabIndex={0}
            className="menu dropdown-content absolute right-0 mt-2 p-4 shadow-xl
    bg-blue-900/95 rounded-xl w-48 border border-blue-700/40 z-50"
          >
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-400 font-semibold'
                      : 'text-gray-100 hover:text-blue-400 transition duration-200'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

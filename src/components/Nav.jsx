/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='fixed top-6 left-0 right-0 flex mx-3 gap-5 p-2 rounded-lg  rounded-bl-lg  bg-violet-500 bg-opacity-60 justify-center font-mono text-center '> 
      <NavLink className={({isActive})=>`hover:text-violet-300 ${isActive?"hover:text-violet-300 text-violet-50 shadow-md shadow-violet-300 bg-violet-900 px-1 rounded-md":"text-violet-50"}`}  to="/"  >Home</NavLink>
      <NavLink className={({isActive})=>`hover:text-violet-300 ${isActive?"hover:text-violet-300 text-violet-50 shadow-md shadow-violet-300 bg-violet-900 px-1 rounded-md":"text-violet-50"}`} to="/about"  >about</NavLink>
      <NavLink className={({isActive})=>`hover:text-violet-300 ${isActive?"hover:text-violet-300 text-violet-50 shadow-md shadow-violet-300 bg-violet-900 px-1 rounded-md":"text-violet-50"}`} to="/contact"  >contact</NavLink>
    </div>
  )
}
export default Nav
// const navItems = [
//   { path: "/", label: "Home" },
//   { path: "/about", label: "About" },
//   { path: "/contact", label: "Contact" },
// ];

// <div className='flex mx-3 gap-5 p-1 bg-violet-400 justify-center font-mono text-center'>
//   {navItems.map(({ path, label }) => (
//     <NavLink 
//       key={path}
//       to={path} 
//       className={({ isActive }) => 
//         `hover:text-cyan-50 active:text-white ${isActive ? 'text-white font-bold' : ''}`
//       }
//     >
//       {label}
//     </NavLink>
//   ))}
// </div>




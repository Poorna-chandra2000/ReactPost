import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-violet-900 pt-9 flex-col">
      <h1 className="font-extrabold text-purple-100 text-[3rem]">Contact Page</h1>
      <div className="flex gap-5 px-2 pt-1 mb-0 bg-violet-900 w-[20em] justify-evenly rounded-lg h-10 items-center text-yellow-50">
        <NavLink 
          to="main"
          className={({ isActive }) => 
            `font-semibold pb-3 border-b-violet-950 rounded-t-lg p-1 ${isActive ? "bg-violet-950 font-semibold" : "bg-violet-700"}`
          }
        >
          main
        </NavLink>
        <NavLink 
          to="secondarycontact"
          className={({ isActive }) => 
            `font-semibold rounded-t-lg p-1 pb-3  ${isActive ? "bg-violet-950 font-semibold" : "bg-violet-700"}`
          }
        >
          secondaryContact
        </NavLink>
      </div>

      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
};

export default Contact;


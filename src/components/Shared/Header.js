import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { NavLink } from "react-router-dom";
import auth from "../Auth/firebase.init";
import { FaUser } from 'react-icons/fa';
import logo from '../../aset/img/logo.png'



const Header = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogout = () =>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  
     const navItems = <>
     <li><NavLink className="rounded-lg" to="/">Home</NavLink></li>
     <li><NavLink className="rounded-lg" to="/blog">Blog</NavLink></li>
     <li><NavLink className="rounded-lg" to="/portfolio">My Portfolio</NavLink></li>
     <li><NavLink className="rounded-lg" to="/about">About</NavLink></li>
    {user && <li><NavLink className="rounded-lg" to="/dashboard">Dashboard</NavLink></li>}
     {user && <li> <p className="rounded-lg" to=""><FaUser/> {user?.email}</p> </li>}
     <li>{ user? <button onClick={handleLogout} className="rounded-lg" >Logout</button> :  <NavLink className="rounded-lg" to="/login">Login</NavLink>}</li>
     
     </>
  return (
    <div className="navbar bg-base-200 p-5 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img width={70} src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
   
  );
};

export default Header;

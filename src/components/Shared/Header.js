import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import { NavLink } from "react-router-dom";
import auth from "../Auth/firebase.init";
import { FaUser } from 'react-icons/fa';



const Header = ({children}) => {
  const [user, loading, error] = useAuthState(auth);
  const handleLogout = () =>{
    signOut(auth)
  }
  
     const navItems = <>
     <li><NavLink className="rounded-lg" to="/">Home</NavLink></li>
     <li><NavLink className="rounded-lg" to="/blog">Blog</NavLink></li>
     <li><NavLink className="rounded-lg" to="/about">About</NavLink></li>
     <li>{ user? <button onClick={handleLogout} className="rounded-lg" >Logout</button> :  <NavLink className="rounded-lg" to="/login">Login</NavLink>}</li>
     {user && <li> <NavLink className="rounded-lg" to=""><FaUser/> {user?.displayName}</NavLink> </li>}
     {/* { user && <Nav.Link className="fw-bold " as={Link} to=""><FaUser/>{user?.email}</Nav.Link>} */}
     </>
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300  lg:px-20 ">
          <div className="flex-1 px-2 mx-2">Random</div>
            <div className="flex-none lg:hidden ">
              <label for="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
               {navItems}
              </ul>
            </div>
          </div>
         {children}
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
           {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

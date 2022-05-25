import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Auth/firebase.init';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
     return (
          <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <h2 className='text-3xl font-bold'>Welcme To Your Dashboard</h2>
    
    <Outlet/>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     
      
      <li><NavLink to="myProfile">My Profile</NavLink></li>
     {!admin &&  <li><NavLink to="myorder">My Orders</NavLink></li>}
      {!admin && <li><NavLink to="addreview">Add A Review</NavLink></li>}
      {admin && <li><NavLink to="addTools">Add New Products</NavLink></li>}
      {admin && <li><NavLink to="addCategory">Add New Category</NavLink></li>}
      {admin && <li><NavLink to="manageProducts">Manage Products</NavLink></li>}
     { admin && <li><NavLink to="alluser">Make Admin</NavLink></li>}
      
    </ul>
  
  </div>
</div>
     );
};

export default Dashboard;
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
     return (
          <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    <h2 className='text-3xl font-bold'>Welcme To Your Dashboard</h2>
    
    <Outlet/>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      
      <li><NavLink to="myorder">My Order</NavLink></li>
      <li><NavLink to="addreview">Add Review</NavLink></li>
      <li><NavLink to="addTools">Add Tools</NavLink></li>
      <li><NavLink to="myProfile">My Profile</NavLink></li>
      
    </ul>
  
  </div>
</div>
     );
};

export default Dashboard;
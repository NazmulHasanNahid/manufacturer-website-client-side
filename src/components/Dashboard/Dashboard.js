import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Auth/firebase.init';
import { CgProfile } from 'react-icons/cg';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdOutlineManageSearch} from 'react-icons/md';
import { MdOutlineAdminPanelSettings} from 'react-icons/md';


const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
     return (
          <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {/* <h2 className='text-3xl font-bold'>Welcme To Your Dashboard</h2> */}
    
    <Outlet/>
    
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
     
      
      <li><NavLink to="myProfile"> <CgProfile size={30}/> My Profile</NavLink></li>
     {!admin &&  <li><NavLink to="myorder"><MdProductionQuantityLimits size={30}/> My Orders</NavLink></li>}
      {!admin && <li><NavLink to="addreview"> <IoIosAddCircleOutline size={30}/> Add A Review</NavLink></li>}
      {admin && <li><NavLink to="addTools"> <IoIosAddCircleOutline size={30}/> Add New Products</NavLink></li>}
      {admin && <li><NavLink to="addCategory"><IoIosAddCircleOutline size={30}/> Add New Category</NavLink></li>}
      {admin && <li><NavLink to="manageProducts"> <MdOutlineManageSearch size={30}/> Manage Products</NavLink></li>}
     { admin && <li><NavLink to="alluser"> <MdOutlineAdminPanelSettings size={30}/> Make Admin</NavLink></li>}
      
    </ul>
  
  </div>
</div>
     );
};

export default Dashboard;
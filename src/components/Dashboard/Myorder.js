import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/firebase.init';

const Myorder = () => {
     const [order , setOrder] = useState([])
     const [user, loading, error] = useAuthState(auth);

     useEffect(()=>{
          fetch(`http://localhost:5000/order?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))

     },[user])
     return (
          <div>
               <h2>my orders {order.length}</h2>
               <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
           order.map(o =>
            <tr>
               <th>1</th>
               <td>{o.name}</td>
               <td>Quality Control Specialist</td>
               <td>Blue</td>
             </tr> )
      }
      
      
     
    </tbody>
  </table>
</div>
          </div>
     );
};

export default Myorder;
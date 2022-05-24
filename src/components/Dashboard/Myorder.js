import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Auth/firebase.init';
import { signOut } from 'firebase/auth';


const Myorder = () => {
     const [order , setOrder] = useState([])
     const [user, loading, error] = useAuthState(auth);
     const navigate = useNavigate()
     useEffect(()=>{
          fetch(`http://localhost:5000/order?email=${user.email}` ,{
              method:'GET',
              headers:{
              'authorization':` Bearer ${localStorage.getItem('accessToken')}`
            }
          })
            .then(res => {
              if(res.status === 401 || res.status === 401){
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigate('/')
              }
              return res.json()
            })
            .then(data => setOrder(data))

     },[user])
     return (
          <div>
               <h2>my orders {order.length}</h2>
               <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Avatar</th>
        <th>cancel</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
      {
           order.map(o =>
            <tr>
               <th>1</th>
               <td>{o.producttitle}</td>
               <td><img width={40} src={o.image} alt="" /></td>
               <td><button className='btn btn-error'>Cancel</button></td>
               <td><button class="btn btn-primary">Payment</button></td>
             </tr> )
      }
      
      
     
    </tbody>
  </table>
</div>
          </div>
     );
};

export default Myorder;
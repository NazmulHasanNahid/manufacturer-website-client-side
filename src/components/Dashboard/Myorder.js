import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Auth/firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


const Myorder = () => {
     const [order , setOrder] = useState([])
     
     const [user, loading, error] = useAuthState(auth);
     const navigate = useNavigate()
     useEffect(()=>{
          fetch(`https://gentle-earth-60406.herokuapp.com/order?email=${user.email}` ,{
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

     },[user , navigate])
     
     const handleDelet = (id) => {
      const proceed = window.confirm("Are you sure you want to Cencel");
      if (proceed) {
        const url = `https://gentle-earth-60406.herokuapp.com/order/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = order.filter((product) => product._id !== id);
              setOrder(remaining);
              toast("Your Order Canceled");
            }
          });
      }
    };
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
           order.map((o , index)  => 
            <tr key={o._id}>
               
               <th>{index + 1}</th>
               <td>{o?.item?.name}</td>
               <td><img width={40} src={o.item.image} alt="" /></td>
               <td><button onClick={()=>handleDelet(o._id)} className='btn btn-error'>Cancel</button></td>
               <td> <Link to={`/dashboard/payment/${o._id}`}><button className="btn btn-primary">Payment</button></Link> </td>
             </tr> )
      }
      
      
     
    </tbody>
  </table>
</div>
          </div>
     );
};

export default Myorder;
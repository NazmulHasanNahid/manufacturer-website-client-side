import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Auth/firebase.init';

const LoadProfile = () => {
     const [user] = useAuthState(auth)
     const [profile , setprofile] = useState([])
     
     useEffect(()=>{
          fetch(`https://gentle-earth-60406.herokuapp.com/profile?email=${user.email}` ,{
              method:'GET',
              headers:{
              'authorization':` Bearer ${localStorage.getItem('accessToken')}`
            }
          })
            .then(res => res.json())
            .then(data => setprofile(data))

     },[profile , user.email])
     return (
          <div>
               {
                    profile.map(p=> <>
                    <h2>Name :  {p?.name}</h2>
                    <p>Email : {p?.email}</p>
                    <p>Education: {p?.education}</p>
                    </>)
               }
          </div>
     );
};

export default LoadProfile;
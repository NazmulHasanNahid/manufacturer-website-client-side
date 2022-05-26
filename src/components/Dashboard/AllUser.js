import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import useUsers from "../../hooks/userUsers";
import auth from "../Auth/firebase.init";
import UserRow from "./UserRow";

const AllUser = () => {

  const [users, setUsers] = useUsers();
 
  const handleRemove = (id) => {
    const proceed = window.confirm("Are you sure you want to delet");
    if (proceed) {
      const url = `https://gentle-earth-60406.herokuapp.com/user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
            toast("User Removed");
          }
        });
    }
  };
 
  
  return (
    <div>
    
    <div className="overflow-x-auto">
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Make Admin</th>
                    <th>Remove User</th>
                </tr>
            </thead>
            <tbody>
               {
                   users.map(user=><UserRow
                   key={user._id}
                   user={user}
                   _id={user._id}
                   handleRemove={handleRemove}
                   ></UserRow>)
               }
            </tbody>
        </table>
    </div>
</div>
  );
};

export default AllUser;

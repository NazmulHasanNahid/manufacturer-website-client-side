import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../Auth/firebase.init";
import UserRow from "./UserRow";

const AllUser = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  
  return (
    <div>
    
    <div class="overflow-x-auto">
        <table class="table w-full my-5">
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
                   ></UserRow>)
               }
            </tbody>
        </table>
    </div>
</div>
  );
};

export default AllUser;

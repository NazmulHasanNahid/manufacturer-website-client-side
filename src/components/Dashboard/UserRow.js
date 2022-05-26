import React from "react";
import { toast } from "react-toastify";
import useUsers from "../../hooks/userUsers";
import Loading from "../Shared/Loading";

const UserRow = ({ user, index , handleRemove }) => {
  const { email , role ,_id } = user;
 
  const makeAdmin = () => {
        fetch(`https://gentle-earth-60406.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error(`Sorry You Can't Made Admin Cause You're Not Admin`);
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                  
                    toast.success(`Successfully made an admin `);
                }

            })
    }

    
  return (
    <tr>
    <th>1</th>
    <td>{email}</td>
    <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
    <td><button onClick={()=>handleRemove(_id)} className="btn btn-xs ">Remove User</button></td>
</tr>
  );
};

export default UserRow;

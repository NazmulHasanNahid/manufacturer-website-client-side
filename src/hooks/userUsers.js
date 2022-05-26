import { useEffect, useState } from "react";

const useUsers = () =>{
     const [users, setUsers] = useState([]);
     useEffect(() => {
       fetch("https://gentle-earth-60406.herokuapp.com/user", {
         method: "GET",
         headers: {
           authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
         },
       })
         .then((res) => res.json())
         .then((data) => setUsers(data));
     }, [users]);
     return[users , setUsers]
}
export default useUsers;
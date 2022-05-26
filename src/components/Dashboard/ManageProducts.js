import React from "react";
import { toast } from "react-toastify";
import useTools from "../../hooks/useTools";

const ManageProducts = () => {
  const [tools, setTools] = useTools();
  const handleDelet = (id) => {
     const proceed = window.confirm("Are you sure you want to delet");
     if (proceed) {
       const url = `https://gentle-earth-60406.herokuapp.com/tools/${id}`;
       fetch(url, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount > 0) {
             const remaining = tools.filter((tool) => tool._id !== id);
             setTools(remaining);
             toast("Product Deleted");
           }
         });
     }
   };
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool , index) => (
            <tr>
              <th>{index +1}</th>
              <td>{tool?.name}</td>
              <td>
                <img width={30} src={tool?.image} alt="" />
              </td>
              <td>
                <button onClick={()=>handleDelet(tool._id)} className="btn btn-error text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolsDetail = () => {
     const { id } = useParams();
     const [tools , setTools] = useState({})
     const {name, description, image, instock, perproduct, minimumorder} = tools
     useEffect(()=>{
          const url = `http://localhost:5000/tools/${id}`
          fetch(url)
          .then(res => res.json())
          .then(data => setTools(data))
     },[id])
     return (
          <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
     );
};

export default ToolsDetail;
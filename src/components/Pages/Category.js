import React, { useEffect, useState } from 'react';
import ShowCategory from './ShowCategory';

const Category = () => {

    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
         .then(res => res.json())
         .then(data => setCategories(data))
    },[])
     return (
          <div className='my-10'>
            <h1 className='catagories-title text-center'>Catagories</h1>
            <div className='catagories-container'>
                {
                    categories.map(category => <ShowCategory key={category._id} category={category}></ShowCategory>)
                }
            </div>
        </div>
     );
};

export default Category;
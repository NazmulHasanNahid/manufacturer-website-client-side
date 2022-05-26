import React, { useEffect, useState } from 'react';
import ShowCategory from './ShowCategory';

const Category = () => {

    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch('https://gentle-earth-60406.herokuapp.com/category')
         .then(res => res.json())
         .then(data => setCategories(data))
    },[])
     return (
          <div className='mb-40'>
            <h1 className='catagories-title text-center text-red-300'>Catagories <br /> ____</h1>
            <div className='catagories-container '>
                {
                    categories.map(category => <ShowCategory key={category._id} category={category}></ShowCategory>)
                }
            </div>
        </div>
     );
};

export default Category;
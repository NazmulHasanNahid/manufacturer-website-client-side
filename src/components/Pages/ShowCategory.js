import React from 'react';

const ShowCategory = ({category}) => {
     return (
          <div>
               <div className='catagories'>
                    <img src={category.img} alt="" srcset="" />
                    <h3 className=''>{category.title}</h3>
                </div>
          </div>
     );
};

export default ShowCategory;
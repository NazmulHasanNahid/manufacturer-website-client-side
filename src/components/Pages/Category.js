import React from 'react';
import c1 from '../../aset/img/c1.jpg'
import c2 from '../../aset/img/c2.jpg'
import c3 from '../../aset/img/c3.jpg'

const Category = () => {
     return (
          <div className='my-10'>
            <h1 className='catagories-title text-center'>All Catagories</h1>
            <div className='catagories-container'>
                <div className='catagories'>
                    <img src={c1} alt="" srcset="" />
                    <h3 className=''>Spare Parts</h3>
                </div>
                <div className='catagories'>
                    <img src={c2} alt="" srcset="" />
                    <h3 className=''>Tyres nd Wheels</h3>
                </div>
                <div className='catagories'>
                    <img src={c3} alt="" srcset="" />
                    <h3 className=''>PRECISION </h3>
                </div>
                <div className='catagories'>
                    <img src={c1} alt="" srcset="" />
                    <h3 className=''>COMBINED</h3>
                </div>
                <div className='catagories'>
                    <img src={c2} alt="" srcset="" />
                    <h3 className=''>STEEL LATHE</h3>
                </div>
                <div className='catagories '>
                    <img src={c3} alt="" srcset="" />
                    <h3 className=''>CASTED</h3>
                </div>
            </div>
        </div>
     );
};

export default Category;
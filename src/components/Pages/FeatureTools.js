import React from 'react';
import useTools from '../../hooks/useTools';
import Loading from '../Shared/Loading';
import ShowFeatureTools from './ShowFeatureTools';

const FeatureTools = () => {
     const [tools , setTools] = useTools()
     if(tools.length === 0){
          return <Loading/>
      }
     return (
          <div>
               <h2 className='text-center text-3xl font-bold'>Feature Tools <br /> _____</h2>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center px-20 my-5'>
                    {
                         tools.slice(0,6).map(tool => <ShowFeatureTools key={tool._id} tool={tool}></ShowFeatureTools>)
                    }
               </div>

          </div>
     );
};

export default FeatureTools;
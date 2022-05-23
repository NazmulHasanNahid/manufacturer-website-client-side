import React from 'react';
import useTools from '../../hooks/useTools';
import ShowFeatureTools from './ShowFeatureTools';

const FeatureTools = () => {
     const [tools , setTools] = useTools()
     return (
          <div>
               <h2 className='text-center text-3xl font-bold'>Feature Tools</h2>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center px-20 my-5'>
                    {
                         tools.map(tool => <ShowFeatureTools key={tool._id} tool={tool}></ShowFeatureTools>)
                    }
               </div>

          </div>
     );
};

export default FeatureTools;
import { Piano } from '../components/Instruments/Piano/Piano';
import React,{ useEffect }  from 'react';
import Studio from '../components/Studio/Studio'


const StudioPage = () => {


    return (
      <div>
        <Studio />
        <div className='test'>
          <Piano/>
        </div>
        
      </div>
      
      
    
    

)};

export default StudioPage;
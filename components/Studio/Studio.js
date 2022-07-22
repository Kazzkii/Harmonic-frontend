
import { Grid } from '@mui/material';
import React,{ useEffect }  from 'react';
import Header from '../Header/Header';
import MediaControl from './MediaControl';

export default function Studio() {


    return (
      <>
        <div class="content">
            <Header/>
        </div>

        <div class="content">
            <MediaControl />
          
        </div>
      </>
    
      
      
        
    )
}

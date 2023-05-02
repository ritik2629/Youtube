import React from 'react';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body=()=>{
    return(
        <div className=' flex mt-3'>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default Body
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Images from './pages/Images';
import Main from "./pages/Main";

function Routers () {
    return(
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/images'} element={<Images/>}/>
        </Routes>
    )
};


export default Routers;

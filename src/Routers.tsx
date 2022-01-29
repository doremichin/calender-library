import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Todos from './pages/Todos';
import Main from "./pages/Main";

function Routers () {
    return(
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/todos'} element={<Todos/>}/>
        </Routes>
    )
};


export default Routers;

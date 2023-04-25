import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './uI/Home';
import Header from './header';
const routes = () => {
  return (
    <Routes>
      {/* <Header/> */}
        <Route path="" element={<Home />} />
     
      
    </Routes>
  )
}

export default routes
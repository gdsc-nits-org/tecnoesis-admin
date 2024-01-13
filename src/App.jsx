import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home, Signin,Team} from './components';


const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
};

export default App;

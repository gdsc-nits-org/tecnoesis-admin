import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home, Event,Team, Module} from './components';


const App = () => {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team />} />
        <Route path="/module" element={<Module />} />
      </Routes>
    </>
  );
};

export default App;

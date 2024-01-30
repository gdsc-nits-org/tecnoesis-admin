import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Event, Team, Module, SignIn } from "./components";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/event" element={<Event />} /> */}
        <Route path="/team" element={<Team />} />
        {/* <Route path="/module" element={<Module />} /> */}
        <Route path="*" element={<div>404 Page not found</div>}/>
      </Routes>
    </>
  );
};

export default App;

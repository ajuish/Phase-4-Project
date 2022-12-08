import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import DisplayPiano from "./DisplayPiano";
import Signup from "./Signup";
import Home from "./Home"
import Profile from "./Profile"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/piano" element={<DisplayPiano />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App;

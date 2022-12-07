import React from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import DisplayPiano from "./DisplayPiano";
import Signup from "./Signup";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/piano" element={<DisplayPiano/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App;

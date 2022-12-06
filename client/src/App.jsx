import React, { useState } from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import DisplayPiano from "./DisplayPiano";

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
        <Route path="/piano" element={<DisplayPiano/>}/>
      </Routes>
    </>
  )
}

export default App;

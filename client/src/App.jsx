import React, { useState } from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import DisplayPiano from "./DisplayPiano";
import Signup from "./Signup";

function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
        <Route path="/piano" element={<DisplayPiano user={user}/>}/>
        <Route path="/signup" element={<Signup user={user} setUser={setUser}/>}/>
      </Routes>
    </>
  )
}

export default App;

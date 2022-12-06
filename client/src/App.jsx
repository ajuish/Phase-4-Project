import React, { useState } from "react";
import Login from "./Login";
import { useNavigate, Route, Routes } from "react-router-dom";
import Piano from "./Piano";

function App() {

  const navigate = useNavigate()

  const [user, setUser] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
        <Route path="/piano" element={<Piano/>}/>
      </Routes>
    </>
  )
}

export default App;

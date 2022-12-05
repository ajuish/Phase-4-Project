import React, { useState } from "react";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Piano from "./Piano";

function App() {

  const [user, setUser] = useState(null)
  return (
    <>
    <Login setUser={setUser}/>
      {/* <Routes> */}
        {/* <Route path="/login" element={<Login setUser={setUser}/>}/> */}
        {/* <Route path="/piano" element={<Piano/>}/> */}
      {/* </Routes> */}
    </>
  )
}

export default App;

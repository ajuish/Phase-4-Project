import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'

function Piano() {
  const location = useLocation()
  // console.log(location.state.user)
  const [keys, setKeys] = useState(["A", "B", "C", "D", "E", "F", "G"]);

  const handleKeyPress = (key) => {
    console.log(`You pressed the key ${key}`);
  };

  return (
    <div>
      <div> Hello {location.state.user.username}</div>
      {keys.map((key) => (
        <button key={key} onClick={() => handleKeyPress(key)}>
          {key}
        </button>
      ))}
    </div>
  );
}

export default Piano
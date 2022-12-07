import React, {useEffect} from 'react'
import 'react-piano/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import PianoMidi from './PianoMidi'


function DisplayPiano() {

  const navigate = useNavigate()
  const currentUser = sessionStorage.getItem("user_id")
  
  useEffect(() => {
    if (currentUser == null) {
     navigate("/login")
    } 
  },[currentUser, navigate])

  return(
    <PianoMidi/>
  )
}

export default DisplayPiano
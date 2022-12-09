import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card} from 'semantic-ui-react'
import EditSongName from './EditSongName'

function Profile({onPlaySong, setRecording, songs, setSongs, deleteSingleSong, editSong}){

    // const [songs, setSongs] = useState([])
    const navigate = useNavigate()

    const [showForm, setShowForm] = useState(false)

    const currentUser = sessionStorage.getItem("user_id")

    function handleShowEdit() {
        setShowForm(!showForm)
    }

    useEffect(() => {
      if (currentUser==null) {
       navigate("/login")
      } 
    },[currentUser, navigate])

    // useEffect(()=> {
    //     fetch('/songs')
    //     .then(resp => resp.json())
    //     .then(songdata => setSongs(songdata))
    // },[songs])

    async function playSong(song) {
        const formatNotes =  song.notes.map(note => note.replaceAll("=>", ":")).map(JSON.parse)
        await setRecording({events: formatNotes})
        await onPlaySong()
     }

    async function deleteSong(id){
        await fetch(`/songs/${id}`, {
                method: 'DELETE'
              })
        await deleteSingleSong(id)
            //     fetch('/songs')
            //   .then(resp => resp.json())
            //   .then(data => setSongs(data))
    }

    const displaySongs = songs ?
        songs.map(song => {
            if (song.user_id === Number(sessionStorage.getItem("user_id")))
                return (
                    <Card>
                        <Card.Content  className="songcard">
                            <Card.Header>{song.name}</Card.Header>
                            <Card.Description>
                                Map Comments Here
                            </Card.Description>
                            <button 
                                key={song.name} 
                                onClick={()=> {playSong(song)}}
                            >
                                Play
                            </button>
                            <button 
                                onClick={()=>{deleteSong(song.id)}}
                            >
                                Delete
                            </button>
                            <button onClick={handleShowEdit}>
                                Edit Name
                            </button>
                            <br></br>
                            <br></br>
                            {showForm ? <EditSongName editSong={editSong} song={song}/> : null}
                        </Card.Content>
                    </Card>
                    )
            else
                return null   
        }) : null

    return(
        <>
            <Card.Group itemsPerRow={4}>
                {displaySongs}
            </Card.Group>
        </>
    )
}

export default Profile
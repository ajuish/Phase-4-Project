import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card} from 'semantic-ui-react'
import EditSongName from './EditSongName'

function Profile({onPlaySong, setRecording}){

    const [songs, setSongs] = useState([])
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

    useEffect(()=> {
        fetch('/songs')
        .then(resp => resp.json())
        // .then(data => data.map((datum) => console.log(datum.notes)))
        .then(songdata => setSongs(songdata))
    },[])

    // async function playSong(song) {
    //     await setRecording({events: song.notes})
    //     await onPlaySong()
    //  }

    async function deleteSong(id){
        await fetch(`/songs/${id}`, {
                method: 'DELETE'
              })
        await fetch('/songs')
              .then(resp => resp.json())
              .then(data => setSongs(data))
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
                                onClick={()=>{deleteSong(song.id)}}
                            >
                                Delete Song
                            </button>
                            <button onClick={handleShowEdit}>
                                Edit Song Name
                            </button>
                            <br></br>
                            <br></br>
                            {showForm ? <EditSongName setSongs={setSongs} song={song}/> : null}
                        </Card.Content>
                    </Card>
                    // <div className="songcards">
                    //     <div class="ui cards">
                    //         <div class="card">
                    //             <div class="content">
                    //                 <h3 class="header">{song.name}</h3>
                                    // <button 
                                    //     onClick={()=>{deleteSong(song.id)}}
                                    // >
                                    //     Delete Song
                                    // </button>
                    //             </div>
                    //         </div>
                    //     </div>
                    //  </div>
                    // <div>
                    //     <button 
                    //         key={song.name} 
                    //         // onClick={()=> {playSong(song)}}
                    //     >
                    //         {song.name}
                    //     </button>
                    //     <button 
                    //         key={song.name} 
                    //         onClick={()=> {deleteSong(song.id)}}
                    //     >
                    //         delete {song.name}
                    //     </button>
                    // </div>
                    )
            else
                return null   
        }) : null

    return(
        <>
            <Card.Group itemPerRow={4}>
                {displaySongs}
            </Card.Group>
        </>
    )
}

export default Profile
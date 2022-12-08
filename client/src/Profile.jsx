import React, {useEffect, useState} from 'react'

function Profile({onPlaySong, setRecording}){

    const [songs, setSongs] = useState([])

    useEffect(()=> {
        fetch('/songs')
        .then(resp => resp.json())
        .then(data => console.log(data))
    },[])

    const displaySongs = songs ?
        songs.map(song => {
            if (song.user_id === Number(sessionStorage.getItem("user_id")))
                return (
                    <button 
                        key={song.name} 
                        onClick={()=> {
                            console.log(song.notes)
                            setRecording({events: song.notes})
                            // onPlaySong()
                            }}
                    >
                        {song.name}
                    </button>
                    )
            else
                return null   
        }) : null

    return(
        <div>{displaySongs}</div>
    )
}

export default Profile
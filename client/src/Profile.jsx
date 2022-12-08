import React, {useEffect, useState} from 'react'

function Profile({onPlaySong, setRecording}){

    const [songs, setSongs] = useState([])

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
                    <div>
                        <button 
                            key={song.name} 
                            // onClick={()=> {playSong(song)}}
                        >
                            {song.name}
                        </button>
                        <button 
                            key={song.name} 
                            onClick={()=> {deleteSong(song.id)}}
                        >
                            delete {song.name}
                        </button>
                    </div>
                    )
            else
                return null   
        }) : null

    return(
        <>
            <div>{displaySongs}</div>
        </>
    )
}

export default Profile
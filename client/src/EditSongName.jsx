import React, {useState} from 'react'

function EditSongName({song, editSong}) {

    const [newName, setNewName] = useState("")

    async function handleEdit(e){
        e.preventDefault()
         await fetch(`/songs/${song.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: newName})
        })
            .then((r) => r.json())
            .then(data => editSong(data))
        await setNewName("")
    }
    console.log(newName)
  return (
    <div>
        <form>
        <input
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            className="edit-name"
            type="text"
            placeholder="Edit Song Name"
        />
        <button onClick={handleEdit}>
            Submit
        </button>
        </form>
    </div>
  )
}

export default EditSongName
import React, { useState,useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs,setSongs] = useState([
        {title:'Memories',id:1},
        {title:'Wonder',id:2},
        {title:'You',id:3}
    ])

    const [age,setAge] = useState(20);

    const handleAddSong = (title) => {
        setSongs([...songs, {title:title,id:uuid()}])
    }
    const handleUpdateAge = () =>{
        setAge(age+1);
    }

    useEffect(()=> {
        console.log("effect hook runs...",songs)
    },[songs]) // it will call when the page get render

    useEffect(()=> {
        console.log("effect hook runs...",age)
    },[age]) // it will call when the page get render

    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song => 
                    {return (<li key={song.id}>{song.title}</li>)})
                }
            </ul>
            <NewSongForm handleAddSong={handleAddSong}/>

            <button onClick ={handleUpdateAge} >Update Age</button> <div>{age}</div>
        </div>
     );
}
 
export default SongList;
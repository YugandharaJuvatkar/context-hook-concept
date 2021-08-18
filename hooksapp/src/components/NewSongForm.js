import React, { useState,useEffect } from 'react';

const NewSongForm = ({handleAddSong}) => {
    const [title,setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddSong(title);
        setTitle(''); //to clear the input field 
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song Name: </label>
            <input type="text" value={title} required onChange = {(e)=> setTitle(e.target.value)}/>
            <button>Add Song</button>
        </form>
     );
}
 
export default NewSongForm;
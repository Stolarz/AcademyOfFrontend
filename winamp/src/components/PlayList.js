import React from 'react';
import Song from "./Song";

const PlayList = (props) => {

    const songs = props.songs.map(song => (
        <Song 
            key={song.id} 
            id={song.id} 
            title={song.title} 
            author={song.author}
            format={song.format}
            active={song.active}
            changeStatus={props.changeStatus}/>
    ))

    return ( 
        <div className="list">
            {songs}
        </div>
     );
}
 
export default PlayList;
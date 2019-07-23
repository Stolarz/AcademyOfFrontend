import React from 'react';

const Song = (props) => (
    <li
      className={props.active ? "enabled" : "disabled"}
  
      onClick={() => props.changeStatus(props.id)}
    >
     {props.id}. {props.title} - {props.author}{props.format}
    </li>
  )

  export default Song;
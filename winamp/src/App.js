import React from 'react';
import './App.css';
import PlayList from './components/PlayList';
import './style.css'

class App extends React.Component {
  state = {
    songs: [
            {
                id: 1,
                title: "In The Air Tonight",
                author: "Panski ft Dana Kelson",
                format: ".mp3",
                active: false
            },
            {
                id: 2,
                title: "I Feel Fire",
                author: "Ilkan Gunuc & Melih Aydogan & Osman Altun",
                format: ".mp3",
                active: false
            },
            {
                id: 3,
                title: "Simple Love",
                author: "Adon & Nicholas Haelg & Sam Halabi",
                format: ".mp3",
                active: false
            },
            {
                id: 4,
                title: "Stand By Me ",
                author: "Cami & Max Oaza",
                format: ".mp3",
                active: false
            }
        ]  
}

handleChangeStatus = (id) => {
        console.log(id);
        const songs = this.state.songs.map(song => {
          if (id === song.id) {
            song.active = !song.active
          }
          return song
        })
    
        this.setState({
          songs
        })
      }

  render(){
    return (
      <>
      <PlayList songs={this.state.songs} changeStatus={this.handleChangeStatus} />
    </>
    );
  }
}

export default App;

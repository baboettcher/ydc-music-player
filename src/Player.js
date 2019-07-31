import React from "react";
import { OnlyPlayPauseButton } from "./players";

class Player extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="players">
          <section>
            <h1>Rhythm #8 - mp3</h1>
            <p className="subheading">Inhale and exhale</p>
            <OnlyPlayPauseButton audioUrl="https://firebasestorage.googleapis.com/v0/b/yogasonica.appspot.com/o/ritmo8.mp3?alt=media&token=dcedf6b9-27e9-4009-950d-18c5e55a4102" />
          </section>
          <section>
            <h1>Rhythm #8 - aac</h1>
            <p className="subheading">Inhale and exhale</p>
            <OnlyPlayPauseButton audioUrl="https://firebasestorage.googleapis.com/v0/b/yogasonica.appspot.com/o/yogasonica02_%235.m4a?alt=media&token=6bd5a153-0ac2-447b-aa9b-2c5191b70390" />
          </section>
        </div>
      </div>
    );
  }
}

export default Player;

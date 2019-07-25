import React from "react";
import { OnlyPlayPauseButton } from "./players";

class Player extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="players">
          <section>
            <h1>Rhythm #8</h1>
            <p className="subheading">Inhale and exhale</p>
            <OnlyPlayPauseButton />
          </section>
        </div>
      </div>
    );
  }
}

export default Player;

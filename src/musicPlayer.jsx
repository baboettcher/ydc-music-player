import React from "react";
//import dog from "./media/dog.jpeg";
import dog from "/Users/dev/hr/ydc/ydc_music/src/media/dog.jpeg";

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true
    };
    this.url = "/Users/dev/hr/ydc/ydc_music/src/media/dog.jpeg";
    //this.url = "./media/ritmo8.mp3";
    // this.url = "http://www.hochmuth.com/mp3/Tchaikovsky_Nocturne__orch.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
    this.setState({ play: true, pause: false });
    this.audio.play();
  };

  pause = () => {
    this.setState({ play: false, pause: true });
    this.audio.pause();
  };

  render() {
    return (
      <div>
        <img src={dog} alt="dog" />

        <button onClick={this.play}>Play</button>
        <button onClick={this.pause}>Pause</button>
      </div>
    );
  }
}

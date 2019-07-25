import React from "react";
import ReactHowler from "../ReactHowler";
import Button from "../components/Button";

class OnlyPlayPauseButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    this.setState({
      playing: true
    });
  }

  handlePause() {
    this.setState({
      playing: false
    });
  }

  render() {
    return (
      <div>
        {/*  <ReactHowler src={["sound1.mp3"]} playing={this.state.playing} /> */}
        <ReactHowler
          src={[
            "https://firebasestorage.googleapis.com/v0/b/yogasonica.appspot.com/o/ritmo8.mp3?alt=media&token=dcedf6b9-27e9-4009-950d-18c5e55a4102"
          ]}
          playing={this.state.playing}
        />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
      </div>
    );
  }
}

export default OnlyPlayPauseButton;

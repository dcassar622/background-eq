import React from "react";
import imageData from "../components/data/images";

class SoundEQComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      sound: ""
    };
  }

  componentDidMount() {
    let imageArray = imageData;
    console.log("mounting");
    imageArray.forEach(img => {
      if (this.props.soundName === img.name) {
        this.setState({ image: img.url });
      }
    });
  }

  render() {
    return (
      <section className="sound-eq-component-main">
        <h3>I am a Sound EQ Component for {this.props.soundName}</h3>
        <audio controls preload="auto">
          <source src="../src/components/white-noise.mp3" type="audio/mpeg" />
          This text displays if the audio tag isn't supported.
        </audio>
        {/*<img src={this.state.image} alt="background"></img> -->*/}
        <img src="../src/images/white-noise.mp3" alt="wtf"></img>
      </section>
    );
  }
}

export default SoundEQComponent;

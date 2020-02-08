import React from "react";
import "../styles/SoundSelector.scss";

function SoundSelector(props) {
  return (
    <div className="sound-selector-main">
      <h3>{props.soundName}</h3>
    </div>
  );
}

export default SoundSelector;

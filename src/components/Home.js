import React from "react";
import { Link } from "react-router-dom";
import SoundSelector from "./SoundSelector";

import "../styles/Home.scss";

function Home() {
  return (
    <section className="content-main">
      <Link to="/white-noise">
        <SoundSelector soundName="white-noise" />
      </Link>
      <Link to="/rain">
        <SoundSelector soundName="rain" />
      </Link>
      <Link to="/wind">
        <SoundSelector soundName="wind" />
      </Link>
      <Link to="/fan">
        <SoundSelector soundName="fan" />
      </Link>
    </section>
  );
}

export default Home;

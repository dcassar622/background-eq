import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SoundEQComponent from "./components/SoundEQComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Router>
        <Switch>
          <Route
            path="/white-noise"
            render={props => (
              <SoundEQComponent {...props} soundName="white-noise" />
            )}
          />
          <Route
            path="/rain"
            render={props => (
              <SoundEQComponent
                {...props}
                soundName="rain"
                sound=""
                image="../src/images/white-noise.jpg"
              />
            )}
          />
          <Route
            path="/wind"
            render={props => <SoundEQComponent {...props} soundName="wind" />}
          />
          <Route
            path="/fan"
            render={props => <SoundEQComponent {...props} soundName="fan" />}
          />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

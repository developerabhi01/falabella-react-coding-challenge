import React, { Component } from "react";
import DisplayInfo from "./components/DisplayInfo";
import Flexi from "./components/Flexi";
import "./style.css";
import flexiConfig from "./api/flexiConfig";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mr India",
      label: 'India',      
    };
  }

  onFlexiSubmit = (value) => {
    this.setState({ name: value.name, label: value.label });
  }

  render() {
    return (
      <div>
        <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} />
        <DisplayInfo name={this.state.name} label={this.state.label} />
      </div>
    );
  }
}

export default App;
import React from "react";
import logo from "./logo.svg";

class Home extends React.Component {
  render() {
    return (
      <>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Kien learn React.js</p>
        <p>Phần mềm quản lý học sinh</p>
      </>
    );
  }
}

export default Home;

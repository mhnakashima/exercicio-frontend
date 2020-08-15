import React from "react";
import "./App.scss";
import Sidebar from "./components/main/sidebar/sidebar";
import logo from "./logo.svg";
import About from "./components/main/about/about";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          <div className="main">
            <About />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

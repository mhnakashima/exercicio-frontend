import React from "react";
import "./App.scss";
import About from "./components/main/about/about";
import Projects from "./components/main/projects/project";
import Contact from "./components/main/sidebar/contact/contact";
import Sidebar from "./components/main/sidebar/sidebar";
import HeaderBar from "./components/headerBar/headerBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="headerContainer">
          <HeaderBar />
        </div>

        <div className="content">
          <div className="main">
            <About />
            <Projects />
          </div>
          <div className="sidebar">
            <Contact />
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

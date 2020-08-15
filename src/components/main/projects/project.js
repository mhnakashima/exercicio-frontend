import React from "react";
import Header from "../../common/header/header";
import Project from "./project/project";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <Header />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
}

export default Projects;

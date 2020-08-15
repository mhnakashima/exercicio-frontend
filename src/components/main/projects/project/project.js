import React from "react";
import Title from "../../../common/title/title";
import Paragraph from "../../../common/paragraph/paragraph";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div className='mainProject'>
            <Title />
            <span className='image'></span>
            <Paragraph />
        </div>
      </div>
    );
  }
}

export default Project;

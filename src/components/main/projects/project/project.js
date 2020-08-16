import React from "react";
import Title from "../../../common/title/title";
import Paragraph from "../../../common/paragraph/paragraph";

import './project.scss';
import Subtitle from "../../../common/subtitle/subtitle";

class Project extends React.Component {
  render() {
    return(
      <div className="project--holder">
        <div className={`project ${this.props.isFirstProject ? "main" : "item"}`}>
            <Title title={this.props.value.title} />
            {
              (this.props.isFirstProject ? <Subtitle className='Subtitle' value={this.props.value.subtitle} /> : null)
            }
            <span className='image'>
              <img src={`${process.env.PUBLIC_URL}/img/${this.props.value.picture}`} />
            </span>
            <Paragraph value={this.props.value.description} />
        </div>
      </div>
    );
  }
}

export default Project;

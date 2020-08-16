import React from "react";
import Header from "../../common/header/header";
import Paragraph from "../../common/paragraph/paragraph";
import './about.scss';

class About extends React.Component {
  render() {
    return (
      <div className="about container">
        <Header />
        <Paragraph />
      </div>
    );
  }
}

export default About;

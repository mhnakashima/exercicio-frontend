import React from "react";

class Title extends React.Component {
  render() {
    return (
      <span className="Title">
          {this.props.title}
      </span>
    );
  }
}

export default Title;

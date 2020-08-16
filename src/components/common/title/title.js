import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="Title">
          {this.props.title}
      </div>
    );
  }
}

export default Title;

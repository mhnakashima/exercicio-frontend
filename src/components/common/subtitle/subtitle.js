import React from "react";

class Subtitle extends React.Component {
  render() {
    return (
      <div className="Subtitle">
          {this.props.value}
      </div>
    );
  }
}

export default Subtitle;

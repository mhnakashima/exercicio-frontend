import React from "react";
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default Header;

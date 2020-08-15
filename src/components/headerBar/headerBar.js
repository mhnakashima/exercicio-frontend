import React from "react";
import Pic from "./pic/pic";
import Info from "./info/info";
import ContactMe from "./contactMe/contactMe";

class HeaderBar extends React.Component {
  render() {
    return (
    <div className="headerBar">
      <Pic />
      <Info />
      <ContactMe />
    </div>
    );
  }
}

export default HeaderBar;

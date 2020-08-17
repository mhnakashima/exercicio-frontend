import React from "react";

class Pic extends React.Component {
  render() {
    return <img src={process.env.PUBLIC_URL + "/img/profile.png"} />;
  }
}

export default Pic;

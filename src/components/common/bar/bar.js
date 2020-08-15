import React from "react";
import Title from "../title/title";

class Bar extends React.Component {
  render() {
    return (
      <div className="Bar">
          <Title />
          <span>Expert</span>
          <div className='barContainer'>
              <div className='barValue'></div>
              <div className='barShadow'></div>
          </div>
      </div>
    );
  }
}

export default Bar;

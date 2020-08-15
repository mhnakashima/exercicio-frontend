import React from "react";
import Header from "../../common/header/header";
import Title from "../../common/title/title";

class Info extends React.Component {
  render() {
    return (
    <div className="info">
      <Header />
      <Title />

      <nav className='social'>
        <ul className='social__list'>
          <li className='social__list__item'>
            <a href='#' className="social__list__link">
              Oi
            </a>
          </li>
        </ul>  
      </nav>
    </div>
    );
  }
}

export default Info;

import React from "react";
import Description from "../../../common/description/description";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact container">
        <Description value={{icon: 'map-marker', text: 'San Francisco, USA'}} />
        <Description value={{icon: 'envelope', text: 'jameslee@website.com'}} />
        <Description value={{icon: 'link', text: 'http://www.website.com'}} />
      </div>
    );
  }
}

export default Contact;

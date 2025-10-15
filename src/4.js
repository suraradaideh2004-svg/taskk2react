import React, { Component } from "react";
import Img from "./WhatsApp Image 2025-09-21 at 8.34.34 AM.jpeg"; 

class UserProfile extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div >
        <img src={Img} alt={name}   style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default UserProfile;

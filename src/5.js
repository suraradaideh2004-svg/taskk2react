import React, { Component } from "react";

class MyButton extends Component {
  render() {
    return (
      <button 
        style={styles.button} 
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#008CBA",
    color: "#fff",
    borderRadius: "5px",

  },
};

export default MyButton;

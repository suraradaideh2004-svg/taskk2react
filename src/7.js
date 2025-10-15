import React, { useState } from "react";

function ShowHide() {
  const [isVisible, setIsVisible] = useState(true); // الحالة الأولية: مرئية

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={toggleVisibility}>
        {isVisible ? "Hide Paragraph" : "Show Paragraph"}
      </button>

      {isVisible && (
        <p style={styles.paragraph}>
          This is a paragraph of text that can be shown or hidden when clicking the button.
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    padding: "10px 15px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#008CBA",
    color: "#fff",
  },
  paragraph: {
    fontSize: "16px",
    color: "#333",
  },
};

export default ShowHide;

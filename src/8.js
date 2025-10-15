import React, { useState } from "react";

function InputTracker() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h3>Type something:</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={styles.input}
        placeholder="Start typing..."
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "400px",
  },
  input: {
    padding: "8px",
    width: "80%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
};

export default InputTracker;

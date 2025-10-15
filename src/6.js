import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h2>Count: {count}</h2>
      <div>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>Decrement</button>
      </div>
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
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  button: {
    padding: "10px 15px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#008CBA",
    color: "#fff",
  },
};

export default Counter;

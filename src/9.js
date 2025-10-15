import React, { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeStyles = {
    backgroundColor: isDark ? "#333" : "#f9f9f9",
    color: isDark ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "300px",
    margin: "20px auto",
  };

  return (
    <div style={themeStyles}>
      <h3>{isDark ? "Dark Theme" : "Light Theme"}</h3>
      <button 
        onClick={toggleTheme} 
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: isDark ? "#fff" : "#333",
          color: isDark ? "#000" : "#fff"
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;

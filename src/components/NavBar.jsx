import React, { useContext } from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";

const NavBar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.color, color: theme.syntax }}>
      <h3>Context Hooks</h3>
      <span
        onClick={toggleAuth}
        style={{
          background: theme.bg,
          padding: 8,
          cursor: "pointer"
        }}
      >
        {isAuthenticated ? "Log In" : "Log Out"}
      </span>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;

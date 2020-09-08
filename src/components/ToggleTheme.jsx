import React, { useContext } from "react";

import { ThemeContext } from "./contexts/ThemeContext";

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>toggle</button>;
};

export default ToggleTheme;

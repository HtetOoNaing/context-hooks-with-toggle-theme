import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./components/contexts/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
import AuthContextProvider from "./components/contexts/AuthContext";
import BookContextProvider from "./components/contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

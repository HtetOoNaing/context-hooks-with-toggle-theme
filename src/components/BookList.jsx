import React, { useContext } from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import { BookContext } from "./contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="bookList"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map(book => (
          <li key={book.id} style={{ background: theme.color }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

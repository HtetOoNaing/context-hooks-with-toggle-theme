import React, { createContext, useState } from "react";
export const BookContext = createContext();
const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { id: 1, title: "The First book" },
    { id: 2, title: "The Second book" },
    { id: 3, title: "The Third book" }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

import React from "react";
import Book from "./book";

export default function ShelfBooks({ books }) {
  return (
    <>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} shelf={books.find(b => b.id === book.id)?.shelf}/>
          ))}
        </ol>
      </div>
    </>
  );
}

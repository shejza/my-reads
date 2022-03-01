import React from "react";
import ShelfBooks from "./components/shelfbooks";

export default function BooksShelf({ books }) {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );

  const wantToRead = books.filter((book) => book.shelf === "wantToRead");

  const read = books.filter((book) => book.shelf === "read");
    
  return (
    <>
      <div className="book-container">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <ShelfBooks books={currentlyReading}/>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <ShelfBooks books={wantToRead}/>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <ShelfBooks books={read}/>
        </div>
      </div>
    </>
  );
}

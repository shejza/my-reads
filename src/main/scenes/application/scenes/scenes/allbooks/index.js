import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./../booksFiltered/services/actions";
import Book from "./../booksFiltered/scenes/components/book";

export default function AllBooks() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  const [booksList, setBooks] = useState([]);

  useEffect(() => {
    dispatch(actions.getAll());
  }, [dispatch]);

  useEffect(() => {
    if (!!books) {
      setBooks(books);
    }
  }, [books]);
  return (
    <>
      <h2 className="all-books">AllBooks</h2>
      <div className="book-container">
        <div className="bookshelf">
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksList.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

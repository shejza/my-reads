import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Book from "./../booksFiltered/scenes/components/book";
import Search from "./search/search";
import { actions } from "./services/actions"; 
import { actions as booksActions } from './../booksFiltered/services/actions';

export default function AllBooks() {
  const dispatch = useDispatch();
  const { searchedBooks } = useSelector((state) => state.searchedBooks);
  const [_searchedBooks, setSearchedBooks] = useState([]);
  const [_query, setQuery] = useState("");
  const addQuery = (query) => {
    setQuery(query);

    if (query.length === 0) {
      setQuery("");
      setSearchedBooks([]);
    }
  };

  useEffect(() => {
    if (_query.length > 0) {
      dispatch(actions.search(_query));
    }
  }, [dispatch, _query]);

  useEffect(() => {
    if (!!searchedBooks) {
      setSearchedBooks(searchedBooks);
    }
  }, [searchedBooks]);

  const { books } = useSelector((state) => state.books);
  const [booksList, setBooks] = useState([]);

  useEffect(() => {
    dispatch(booksActions.getAll());
  }, [dispatch]);

  useEffect(() => {
    if (!!books) {
      setBooks(books);
    }
  }, [books]);

  const allBooksSearch =
    _searchedBooks.length === 0 ? (
      <span>Loading..</span>
    ) : (
      _searchedBooks.books.map((book) => <Book key={book.id} book={book} shelf={booksList.find(b => b.id === book.id)?.shelf}/>)
    );

  return (
    <>
      <h2 className="all-books">AllBooks</h2>
      <Search addQuery={addQuery} />
      <div className="book-container">
        <div className="bookshelf">
          <div className="bookshelf-books">
            <ol className="books-grid">{allBooksSearch}</ol>
          </div>
        </div>
      </div>
    </>
  );
}

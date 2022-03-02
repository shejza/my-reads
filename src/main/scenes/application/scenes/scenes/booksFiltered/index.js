import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooksShelf from "./scenes/index";
import { actions } from "./services/actions";

export default function BooksFiltered() {
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
      <BooksShelf books={booksList} />
    </>
  );
}

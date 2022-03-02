import React from "react";
import { actions } from './../../services/actions';
import { useDispatch } from 'react-redux';

export default function Book({ book, shelf }) {
    const dispatch = useDispatch();
    
    const handleClick = ( book, shelf) => {
      dispatch(actions.updateBook(book, shelf));
    }
    console.log(shelf)
  return (
    <>
      <li className="books-grid__item">
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select defaultValue={shelf ? shelf : 'none'} className="book-self-changer-select" onChange={(e) => handleClick(book, e.target.value)}>
                <option>
                  Move to... 
                </option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors && book.authors.map((author) => author)}
          </div>
        </div>
      </li>
    </>
  );
}

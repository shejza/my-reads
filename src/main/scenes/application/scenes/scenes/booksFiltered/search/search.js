import React from 'react';

export default function Search() {
  return (
    <div className='search'>
        <input
        type='text'
        className='search__input'
        name='search'
        placeholder='Search by title or author'
        />
  </div>
  );
}

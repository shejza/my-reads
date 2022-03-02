import React from 'react';



export default function Search({addQuery}) {
  
  const handleChange = (e) => {
    addQuery(e.target.value)
  }
  return (
    <div className='search'>
        <input
        type='text'
        className='search__input'
        name='search'
        placeholder='Search by title or author'
       
        onChange={handleChange}
        />
  </div>
  );
}

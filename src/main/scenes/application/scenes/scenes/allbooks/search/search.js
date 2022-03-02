import React, { useState } from 'react';



export default function Search({addQuery}) {
  // const dispatch = useDispatch();
  
  const handleChange = (e) => {
    addQuery(e.target.value)
    // dispatch(actions.search(query));
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

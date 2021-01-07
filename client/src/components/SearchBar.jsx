import React, { useState } from 'react';

const SearchBar = ({ getEvents }) => {
  const [ searchText, setSearchText ] = useState('');

  // Event Handler Functions
  const handleChange = event => {
    const { value } = event.target;
    setSearchText(value);
  }
  const handleSubmit = event => {
    event.preventDefault();
    getEvents(searchText);
  }

  return (
    <section className='mb-3'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchText}
          placeholder='Historic Event Search...'
          onChange={handleChange}
          className='form-control'
        />
        <br></br>
        <input
          type='submit'
          value='Submit'
          className='btn btn-primary'
        />
      </form>
    </section>
  );
};

export default SearchBar;
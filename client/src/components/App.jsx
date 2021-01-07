import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Events from './Events.jsx';
import SearchBar from './SearchBar.jsx';
import './App.css';

const App = () => {
  const [ events, setEvents ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ count, setCount ] = useState(0);
  const [ limit, setLimit ] = useState(10);
  const [ loading, setLoading ] = useState(false);
  const [ search, setSearch ] = useState(null);

  // Re-render whenever the page is updated
  useEffect(() => {
    setLoading(true);
    getEvents();
    setLoading(false);
  }, [page]);

  // Helper function for server-side pagination
  const getEvents = async (text = search) => {
    try {
      const { data, headers } = await axios.get(`/events?q=${text}&_page=${page}&_limit=${limit}`);
      setSearch(text);
      setEvents(data);
      setCount( parseInt(headers.['x-total-count']) );
    } catch (error) {
      console.log(error);
    }
  };

  // Event Handler function for clicking pages
  const handlePageClick = ({ selected: selectedPage }) => {
    setPage(selectedPage + 1);
  }

  // Render message when searches yield no results
  if (events.length === 0 && search !== null) {
    return (
      <section className='container mt-5'>
        <h1 className='text-primary mb-3'>Historical Events</h1>
        <SearchBar getEvents={getEvents}/>
      <h2>No events found...Ahh. Ahh. Ahh. You didn't say the magic word</h2>
      </section>
    );
  }
  // Render paginated events upon successful searches
  return (
    <section className='container mt-5'>
      <h1 className='text-primary mb-3'>Historical Events</h1>
      <SearchBar getEvents={getEvents}/>
      <Events events={events} loading={loading}/>
      {events.length > 0 && <ReactPaginate
        previousLabel='< Previous'
        nextLabel='Next >'
        pageCount={Math.ceil( count / limit )}
        onPageChange={handlePageClick}
        containerClassName='pagination'
        previousLinkClassName='pagination_link'
        nextLinkClassName='pagination_link'
        disabledClassName='pagination_link--disabled'
        activeClassName='pagination_link--active'
      />}
    </section>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Events from './Events.jsx';
import './App.css';

const App = () => {
  const [ events, setEvents ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ count, setCount ] = useState(0);
  const [ limit, setLimit ] = useState(5);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    getEvents();
    setLoading(false);
  }, [page]);

  const getEvents = async () => {
    try {
      const { data, headers } = await axios.get(`/events?_page=${page}&_limit=${limit}`);
      setEvents(data);
      setCount( parseInt(headers.['x-total-count']) );
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    setPage(selectedPage + 1);
  }

  return (
    <section className='container mt-5'>
      <h1 className='text-primary mb-3'>Historical Events</h1>
      <Events events={events} loading={loading}/>
      <ReactPaginate
        previousLabel='< Previous'
        nextLabel='Next >'
        pageCount={Math.ceil( count / limit )}
        onPageChange={handlePageClick}
        containerClassName='pagination'
        previousLinkClassName='pagination_link'
        nextLinkClassName='pagination_link'
        disabledClassName='pagination_link--disabled'
        activeClassName='pagination_link--active'
      />
    </section>
  );
};

export default App;
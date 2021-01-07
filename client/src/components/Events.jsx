import React from 'react';
import Event from './Event.jsx';

const Events = ({ events, loading }) => {
  // Render loading message if fetch takes too long
  if (loading) {
    return <h2>Hold on to your butts...</h2>
  }
  // Render list of events
  return (
    <ul className='list-group mb-4'>
      {events.map(event => <Event key={event.id} title={event.title} date={event.date}/>)}
    </ul>
  );
};

export default Events;
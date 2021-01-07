import React from 'react';
import Event from './Event.jsx';
import { v4 as uuidv4 } from 'uuid';

const Events = ({ events, loading }) => {
  // Render loading message if fetch takes too long
  if (loading) {
    return <h2>Hold on to your butts...</h2>
  }
  // Render list of events
  return (
    <ul className='list-group mb-4'>
      {events.map(event => {
        if (event.date[0] === '-') {
          event.date = event.date.slice(1).concat(' BC');
        }
        return (
          <Event key={uuidv4()} title={event.description} date={event.date}/>
        );
      })}
    </ul>
  );
};

export default Events;
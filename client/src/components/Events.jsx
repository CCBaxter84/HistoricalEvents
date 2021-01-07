import React from 'react';

const Events = ({ events, loading }) => {
  if (loading) {
    return <h2>Hold on to your butts...</h2>
  }

  return (
    <ul className='list-group mb-4'>
      {events.map(event => (
        <li key={event.id} className='list-group-item'>
          {`${event.title} - ${event.date}`}
        </li>
      ))}
    </ul>
  )
};

export default Events;
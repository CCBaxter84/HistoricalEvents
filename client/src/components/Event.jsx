import React, { useState } from 'react';

const Event = ({key, title, date}) => {
  const [ showEditor, setShow ] = useState(false);

  const handleClick = event => setShow(true);

  return (
    <li key={key} className='col list-group-item'>
      {`${title} - ${date}`}
      <br/>
      <button className='btn btn-secondary'>
        Edit
      </button>
    </li>
  );
};

export default Event;
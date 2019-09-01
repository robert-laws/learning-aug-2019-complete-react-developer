import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = (props) => {
  return (
    <div className='homepage'>
      <button onClick={() => props.history.push('/hats')}>Hats Page</button>
      <Directory />
    </div>
  )
}

export default HomePage;
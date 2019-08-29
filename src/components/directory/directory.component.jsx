import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hat',
          imageUrl: 'https://i.ibb.co/cvntL1/hats.png',
          id: 1
      
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2      
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, title, imageUrl}) => (
            <MenuItem key={id} title={title} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
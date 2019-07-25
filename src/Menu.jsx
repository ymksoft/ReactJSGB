import React from 'react';

import MenuItem from './MenuItem';

export default class Menu extends React.Component {
  render() {

    const items = this.props.items.map((item, index) => {
      return <MenuItem key={index} href={item.href}>
        {item.name}
      </MenuItem>;
    })


    return (
      <div>
        <h1>{this.props.menuName}</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}
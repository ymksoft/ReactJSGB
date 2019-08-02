import React from 'react';

import Post from './Post';

export default class Blog extends React.Component {
  render() {

    const items = this.props.posts.map((item, index) => {
      return <Post key={index} title={item.title}> {item.postBody}</Post>;
    })

    return (
      <div>
        <h1>{this.props.blogName}</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}
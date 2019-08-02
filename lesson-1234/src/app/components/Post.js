import React from 'react';
import PropTypes from 'prop-types';

export default class Post extends React.Component {
  render() {
    return (
      <div><p>{this.props.title}</p><hr /><p>{this.props.children}</p></div>
    );
  }
}
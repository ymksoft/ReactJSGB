import React, { Component } from 'react'
import axios from 'axios';
import CommentProfile from '../components/Comment';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    }
  }

  render() {
    return (
      <div>
        {this.state.comment && <CommentProfile  {...this.state.comment} />}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
      .then(response => {
        this.setState({ comment: response.data });
      })
  }
}

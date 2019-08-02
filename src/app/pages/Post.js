import React, { Component } from 'react'
import axios from 'axios';
import PostProfile from '../components/Post';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    }
  }

  render() {
    return (
      <div>
        {this.state.post && <PostProfile  {...this.state.post} />}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
      .then(response => {
        this.setState({ post: response.data });
      })
  }
}

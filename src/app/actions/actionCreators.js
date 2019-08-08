import axios from 'axios';
import dispatcher from '../dispatcher';

export function addPost(title, userId, body) {
  const action = {
    type: 'ADD_POST',
    data: { title, userId, body }
  }
  dispatcher.dispatch(action);
}

export function getPosts() {
  axios.get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      const action = {
        type: 'GET_POSTS',
        data: response.data
      }
      dispatcher.dispatch(action);
    })
}

export function addUser(name, id, phone, email, website) {
  const action = {
    type: 'ADD_USER',
    data: { name, id, phone, email, website }
  }
  dispatcher.dispatch(action);
}

export function getUsers() {
  axios.get('http://jsonplaceholder.typicode.com/users/')
    .then(response => {
      const action = {
        type: 'GET_USERS',
        data: response.data
      }
      dispatcher.dispatch(action);
    })
}
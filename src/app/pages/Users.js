import React, { Component } from 'react';

import UsersList from '../components/UsersList';
import { addUser, getUsers } from '../actions/actionCreators';
import UserStore from '../stores/userStore';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.onUserChange = this.onUserChange.bind(this);
  }

  user() {
    // Добавление пользователя
    const name = 'Новый пользователь';
    const id = 1;
    const phone = '123';
    const emal = '1@1.ru';
    const website = 'www.ru';
    addUser(name, id, phone, emal, website);
  }

  onUserChange() {
    const users = UserStore.users;
    this.setState({ users });
  }

  componentDidMount() {
    UserStore.on('change', this.onUserChange);
    getUsers();
  }

  componentWillUnmount() {
    UserStore.removeListener('change', this.onUserChange);
  }

  render() {
    return (
      <div>
        <button onClick={this.user} className="btn btn-primary">Добавить пользователя</button>
        <UsersList users={this.state.users} />
      </div>
    )
  }
}

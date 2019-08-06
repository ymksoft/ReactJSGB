import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

class userStore extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.addUser = this.addUser.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.change = this.change.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  addUser(user) {
    this.users = [user, ...this.users];
    this.change();
  }

  change() {
    this.emit('change');
  }

  getUsers(users) {
    this.users = users;
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case 'ADD_USER': {
        this.addUser(action.data);
        break;
      }
      case 'GET_USERS': {
        this.getUsers(action.data);
        break;
      }
    }
  }
}

const store = new userStore();
dispatcher.register(store.handleActions);
export default store;
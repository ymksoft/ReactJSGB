import React, {Component} from 'react';

import Menu from './Menu';
import Login from './Login';

import './style.css';

class App extends Component {
  render() {
    const menuItems = [
        { name: 'Главная', href: '/'},
        { name: 'Каталог', href: '/catalog'},
        { name: 'Войти', href: '/login'},
        { name: 'Контакты', href: '/contact'},
    ];
    return (
      <div>
      <Menu items={menuItems} menuName="Главное меню" />
      <h1>Главная</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde deserunt, optio fugit nesciunt eveniet totam magni minima voluptas perferendis eos necessitatibus cumque earum corporis eaque soluta accusantium at enim maiores!</p>
      <Login title="Вход в личный кабинет"/>
      </div>
    );
  }
}

export default App;

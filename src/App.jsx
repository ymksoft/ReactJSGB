import React, {Component} from 'react';

import Menu from './Menu';
import Login from './Login';

import './style.css';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const menuItems = [
        { name: 'Главная', href: '/'},
        { name: 'Каталог', href: '/catalog'},
        { name: 'Войти', href: '/login'},
        { name: 'Контакты', href: '/contact'},
    ];
    const postItems = [
        { title: 'Носороги в тундре', postBody: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sint soluta natus commodi ullam eum. Minima aperiam nam, at commodi velit quo consequatur quam impedit reprehenderit, tempore laudantium pariatur neque?' },
        { title: 'Наши победили 8:0', postBody: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis atque in doloremque at! Blanditiis voluptatum ut similique voluptates dignissimos quisquam officia, sunt iure impedit eaque, dolor exercitationem est rerum nostrum porro obcaecati! Debitis, iste impedit? Quis, dolores porro iusto vel, perferendis neque praesentium consequuntur maxime vero, pariatur deleniti facere cum!' },
        { title: 'Отличный короткий пост', postBody: 'Внезапно пришла зима летом!'},
    ];
    return (
      <div>
        <div>
          <button onClick={() => this.openModal()}>Открыть модальное окно</button>
          <WelcomeModal
            isOpen={this.state.isModalOpen}
            onClose={() => this.closeModal()}>
            <h3>Это модальное окно</h3>
            <p>Привет всем посетителям блога</p>
            <button className="btClose" onClick={()=>this.closeModal()}>Закрыть</button>
          </WelcomeModal>
        </div>
        <div>
        <Menu items={menuItems} menuName="Главное меню" />
        <h1>Главная</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde deserunt, optio fugit nesciunt eveniet totam magni minima voluptas perferendis eos necessitatibus cumque earum corporis eaque soluta accusantium at enim maiores!</p>
        <Login title="Вход в личный кабинет"/>
        <Blog posts={postItems} blogName="Vasya Pupkins BLOGs"/>
        </div>
      </div>
    );
  }
}

export default App;



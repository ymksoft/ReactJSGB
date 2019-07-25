import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    return (
        <div>
            <h1>{this.props.title}</h1>
            <form id="login-form" action="/login" method="post">
                <div>
                    <label>Почта или номер мобильного</label>
                    <input type="text" id="loginform-identity"  
                        name="identity" placeholder="телефон или почта" autofocus aria-required="true"></input>
                </div>
                <div>
                    <label>Пароль</label>
                    <input type="password" id="loginform-password"  
                        name="password" value="" aria-required="true" placeholder="введите пароль"></input>
                </div>
                <div>
                    <button type="submit"  
                        name="login-button">Войти</button>
                </div>
            </form> 
      </div>
    );
  }
}

export default Login;
import React from 'react';
import { Icon } from 'react-icons-kit';
import { th } from 'react-icons-kit/fa/th';
import './styles.scss';
import Button from '../Button';

function Header() {
  return (
    <header className="header">
      <Button className="button-icon">
        <div>
          <Icon size={30} icon={th} />
        </div>
      </Button>
      <a href="/" className="title">SERIALKIN</a>
      <div className="logo" />
      <span className="text">Сериалы Онлайн</span>
      <div className="grow" />
      <div className="auth-buttons">
        <Button>Регистрация</Button>
        <Button green className="header-button">Вход</Button>
      </div>
    </header>
  );
}

export default Header;

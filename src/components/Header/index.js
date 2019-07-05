import React from 'react';
import './styles.scss';
import Button from '../Button';

function Header() {
  return (
    <header className="header">
      <a href="/" className="title">SERIALKIN</a>
      <div className="logo" />
      <span className="text">Сериалы Онлайн</span>
      <div className="grow" />
      <Button>Регистрация</Button>
      <Button green className="header-button">Вход</Button>
    </header>
  )
}

export default Header;

import React from 'react';
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <a href="/" className="title">SERIALKIN</a>
      <div className="logo" />
      <span className="text">Сериалы Онлайн</span>
    </header>
  )
}

export default Header;

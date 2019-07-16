import React from 'react';
import './styles.scss';
import Card from '../../components/Card';

function Main() {
  return (
    <section className="main-page">
      <h1 className="title">Библиотека сериалов</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Main;

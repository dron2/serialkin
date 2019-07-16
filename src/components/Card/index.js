import React from 'react';
import Button from '../Button';
import './styles.scss';

function Card() {
  return (
    <article className="card">
      <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/02/09/rick-and-morty.jpg" alt="Рик и Морти" />
      <div className="info">
        <h1>Рик и Морти</h1>
        <Button green>Смотреть</Button>
      </div>
    </article>
  );
}

export default Card;

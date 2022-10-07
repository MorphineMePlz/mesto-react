import React from "react";

function Card({ card, onCardClick }) {
  return (
    <li className="gallery__list-item">
      <button className="gallery__delete-button"></button>
      <div className="gallery__image-container">
        <img
          src={card.link}
          alt={card.name}
          className="gallery__image"
          onClick={() => onCardClick(card)}
        />
      </div>
      <div className="gallery__content">
        <h2 className="gallery__title">{card.name || "Загрузка..."}</h2>
        <div className="gallery__like-container">
          <button type="button" className="gallery__like-button"></button>
          <span className="gallery__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;

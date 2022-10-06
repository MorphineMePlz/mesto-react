import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="gallery__list-item">
      <button className="gallery__delete-button"></button>
      <div className="gallery__image-container">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="gallery__image"
          onClick={handleClick}
        />
      </div>
      <div className="gallery__content">
        <h2 className="gallery__title">{props.card.name || "Загрузка..."}</h2>
        <div className="gallery__like-container">
          <button type="button" className="gallery__like-button"></button>
          <span className="gallery__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;

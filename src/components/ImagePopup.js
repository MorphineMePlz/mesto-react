import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup ${props.card ? "popup_active" : false}`}>
      <div className="popup__image-container">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__image-place"
        />
        <p className="popup__image-title">{props.card.name}</p>
        <button
          type="button"
          className="popup__close-button"
          onClose={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;

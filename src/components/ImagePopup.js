import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_new-place">
      <div className="popup__container">
        <h2 className="popup__title">Новое место</h2>
        <form name="createPlace" className="popup__form" noValidate>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_place"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
              name="place"
            />
            <span className="popup__error" id="place-error"></span>
          </label>
          <label className="popup__field">
            <input
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required
              type="url"
              name="link"
            />
            <span className="popup__error" id="link-error"></span>
          </label>
          <button type="submit" className="popup__submit-button" disabled>
            Создать
          </button>
        </form>
        <button type="button" className="popup__close-button"></button>
      </div>
    </div>
  );
}

export default ImagePopup;

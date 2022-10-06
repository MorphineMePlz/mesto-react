import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onClose, isOpen }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="popup_new-place"
      title="Новое место"
      textButton="Создать"
      children={
        <>
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
        </>
      }
    />
  );
}

export default AddPlacePopup;

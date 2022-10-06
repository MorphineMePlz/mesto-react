import React from "react";
import PopupWithForm from "./PopupWithForm";

function ProfilePopup({ onClose, isOpen }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="popup_profile"
      title="Редактировать профиль"
      textButton="Сохранить"
      children={
        <>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
              name="name"
            />
            <span className="popup__error" id="name-error"></span>
          </label>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_prof"
              placeholder="Профессия"
              minLength="2"
              maxLength="200"
              required
              name="job"
            />
            <span className="popup__error" id="job-error"></span>
          </label>
        </>
      }
    />
  );
}

export default ProfilePopup;

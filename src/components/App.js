import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AvatarPopup from "./AvatarPopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState("");

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <div className="popup popup_profile">
          <div className="popup__container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form name="changeProfile" className="popup__form" noValidate>
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
              <button type="submit" className="popup__submit-button" disabled>
                Сохранить
              </button>
            </form>
            <button type="button" className="popup__close-button"></button>
          </div>
        </div>

        <div className="popup popup_confirmation popup_style">
          <div className="popup__container">
            <h2 className="popup__confirmation-title">Вы уверены?</h2>
            <form name="confirmation" className="popup__form">
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_confirm"
              >
                Да
              </button>
            </form>
            <button type="button" className="popup__close-button"></button>
          </div>
        </div>
        <div className="popup popup_image popup_style">
          <div className="popup__image-container">
            <img src="#" alt="#" className="popup__image-place" />
            <p className="popup__image-title"></p>
            <button type="button" className="popup__close-button"></button>
          </div>
        </div>

        <AvatarPopup isOpen={isEditAvatarPopupOpen} />

        {/* <div className="popup popup_active popup_loader popup_style"></div> */}
      </div>
      <template className="gallery__template">
        <li className="gallery__list-item">
          <button className="gallery__delete-button"></button>
          <div className="gallery__image-container">
            <img src="#" alt="#" className="gallery__image" />
          </div>
          <div className="gallery__content">
            <h2 className="gallery__title">Hello</h2>
            <div className="gallery__like-container">
              <button type="button" className="gallery__like-button"></button>
              <span className="gallery__like-count">0</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;

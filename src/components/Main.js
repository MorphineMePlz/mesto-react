import React from "react";

function Main({ onEditAvatar }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-container">
            <img
              src="<%=require('./images/loader.svg')%>"
              alt="Жак-Ив Кусто"
              className="profile__image"
            />
            <button
              type="button"
              className="profile__edit-button-avatar"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info-container">
            <div className="profile__box">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__profession">Исследователь океана</p>
          </div>
        </div>
        <button type="button" className="profile__plus-button"></button>
      </section>
      <section className="gallery">
        <ul className="gallery__list"></ul>
      </section>
    </main>
  );
}

export default Main;

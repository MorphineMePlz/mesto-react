import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import loader from "../images/loader.svg";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onHandleCardClick }) {
  const [userName, setUserName] = useState("Загрузка...");
  const [userDescription, setUserDescription] = useState("Загрузка...");
  const [userAvatar, setUserAvatar] = useState(loader);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInformation(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
        localStorage.setItem("userId", userData._id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-container">
            <img src={userAvatar} alt={userName} className="profile__image" />
            <button
              type="button"
              className="profile__edit-button-avatar"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info-container">
            <div className="profile__box">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__plus-button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="gallery">
        <ul className="gallery__list">
          {cards.length > 0 &&
            cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                onCardClick={onHandleCardClick}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AvatarPopup from "./AvatarPopup";
import ProfilePopup from "./ProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import PopupConfirmation from "./PopupConfirmation";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmationPopupOpen(false);
    setSelectedCard(false);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onHandleCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

        <PopupConfirmation
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
        />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;

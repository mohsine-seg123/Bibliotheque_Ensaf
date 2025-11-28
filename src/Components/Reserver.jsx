
import React, { useState } from "react";
import "./Reserver.css";

const ReserveModal = ({ isOpen, onClose, book }) => {
     const [name, setName] = useState("");

     const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleReserve = (e) => {
    e.preventDefault();
    alert(`Réservation envoyée pour : ${book.name}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Réserver : {book.name}</h2>

        <form onSubmit={handleReserve}>
          <label>Votre nom :</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email :</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            Confirmer
          </button>
        </form>

        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ReserveModal;

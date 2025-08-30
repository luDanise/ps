import React from 'react';
import '../styles/styles.css';

function BackButton({ onClick }) {
  return (
    <button className="back-btn" onClick={onClick}>
      VOLVER
    </button>
  );
}

export default BackButton;
import React from 'react';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      Volver
    </button>
  );
}

export default BackButton;

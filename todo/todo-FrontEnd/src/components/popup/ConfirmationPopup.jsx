import React, { useState } from 'react';

const ConfirmationPopup = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmButtonLabel = 'Confirm',
  cancelButtonLabel = 'Cancel',
}) => {
  return (
    <div className={`confirmation-popup ${isOpen ? 'active' : ''}`}>
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="button-container">
          <button onClick={onClose}>{cancelButtonLabel}</button>
          <button onClick={onConfirm}>{confirmButtonLabel}</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
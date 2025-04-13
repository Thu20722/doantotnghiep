import React from "react";
import "./ConfirmPopup.css";

const ConfirmPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirm-overlay">
      <div className="confirm-popup">
        <p>{message}</p>
        <div className="popup-buttons">
          <button className="confirm-btn" onClick={onConfirm}>
            Xác nhận
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;

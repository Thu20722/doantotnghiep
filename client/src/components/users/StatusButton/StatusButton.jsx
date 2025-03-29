import React from "react";
import "./StatusButton.css"; // Import CSS

const StatusButton = ({ status }) => {
  // Xác định màu sắc dựa trên trạng thái
  const getStatusStyle = () => {
    switch (status) {
      case "Đã hẹn lịch":
        return { backgroundColor: "#218838 ", color: "white" }; // Xanh lá
      case "Hiến máu thành công":
        return { backgroundColor: "#0056b3", color: "white" }; // Xanh dương
      case "Đã xóa lịch":
        return { backgroundColor: "#c82333", color: "white" }; // Đỏ
      default:
        return { backgroundColor: "#6c757d", color: "white" }; // Xám (mặc định)
    }
  };

  return (
    <div className="status-container">
      <button className="status-button" style={getStatusStyle()}>
        {status}
      </button>
    </div>
  );
};

export default StatusButton;

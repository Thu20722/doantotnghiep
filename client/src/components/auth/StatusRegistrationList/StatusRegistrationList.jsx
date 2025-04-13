import React from "react";

const StatusRegistrationList = ({ status }) => {
  // Xác định màu sắc dựa trên trạng thái
  const getStatusStyle = () => {
    switch (status) {
      case "Đang cập nhật":
        return { backgroundColor: "#E8F8FD", color: "#13B2E4" };
      case "Đã cập nhật":
        return { backgroundColor: "#E7F4EE", color: "#0D894F" };
      case "Chưa cập nhật":
        return { backgroundColor: "#FDF1E8", color: "#E46A11" };
      default:
        return { backgroundColor: "#6c757d", color: "white" };
    }
  };

  return (
    <div className="status-container-post">
      <button className="status-button-post" style={getStatusStyle()}>
        {status}
      </button>
    </div>
  );
};

export default StatusRegistrationList
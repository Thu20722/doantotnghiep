import React from "react";

const StatusLinkedAgency = ({ status }) => {
  // Xác định màu sắc dựa trên trạng thái
  const getStatusStyle = () => {
    switch (status) {
      case "Chưa kích hoạt":
        return { backgroundColor: "#E8F8FD", color: "#13B2E4" };
      case "Đã kích hoạt":
        return { backgroundColor: "#E7F4EE", color: "#0D894F" };
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

export default StatusLinkedAgency;

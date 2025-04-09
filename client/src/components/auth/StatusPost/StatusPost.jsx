import React from "react";
import "./StatusPost.css";

const StatusPost = ({ status }) => {
  // Xác định màu sắc dựa trên trạng thái
  const getStatusStyle = () => {
    switch (status) {
      case "Chờ xác nhận":
        return { backgroundColor: "#E8F8FD", color: "#13B2E4" };
      case "Đã xác nhận":
        return { backgroundColor: "#E7F4EE", color: "#0D894F" };
      case "Hủy yêu cầu":
        return { backgroundColor: "#FDF1E8", color: "#E46A11" };
      case "Chờ duyệt":
        return { backgroundColor: "#E8F8FD", color: "#13B2E4" };
      case "Đã duyệt":
        return { backgroundColor: "#E7F4EE", color: "#0D894F" };
      case "Hủy":
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

export default StatusPost;

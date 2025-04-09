import React from "react";
import "./StatusCampaign.css";

const StatusPost = ({ status }) => {
  // Xác định màu sắc dựa trên trạng thái
  const getStatusStyle = () => {
    switch (status) {
      case "Còn hạn":
        return { backgroundColor: "#E8F8FD", color: "#13B2E4" };
      case "Hết hạn":
        return { backgroundColor: "#FF9000", color: "#ffffff" };
      default:
        return { backgroundColor: "#6c757d", color: "white" };
    }
  };

  return (
    <div className="status-container-campaign">
      <button className="status-button-campaign" style={getStatusStyle()}>
        {status}
      </button>
    </div>
  );
};

export default StatusPost;

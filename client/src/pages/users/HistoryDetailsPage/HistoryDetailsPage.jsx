import React from "react";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import StatusButton from "../../../components/users/StatusButton/StatusButton";
import "./HistoryDetailsPage.css";

const HistoryDetailsPage = () => {
  // Dữ liệu giả lập cho lịch sử hiến máu
  const historyDetails = {
    method: "Hiến máu",
    hospital: "Bệnh viện Ung Bướu Đà Nẵng",
    address: "Liên Chiểu, Đà Nẵng",
    volume: "-",
    bloodType: "-",
    date: "25/02/2025",
    status: "Đã hẹn lịch",
  };

  return (
    <div className="historydetails-page">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        <h1 className="title">Lịch sử hiến máu</h1>
        <div className="history-card">
          <div className="history-header">
            <h3>Thông tin hiến máu</h3>
            <StatusButton status={historyDetails.status} />
          </div>
          <div className="history-content">
            <p><strong>Hình thức hiến:</strong> {historyDetails.method}</p>
            <p><strong>Cơ sở tiếp nhận máu:</strong> {historyDetails.hospital}</p>
            <p><strong>Địa chỉ:</strong> {historyDetails.address}</p>
            <p><strong>Lượng máu đã hiến:</strong> {historyDetails.volume}</p>
            <p><strong>Nhóm máu:</strong> {historyDetails.bloodType}</p>
            <p><strong>Ngày hiến máu:</strong> {historyDetails.date}</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HistoryDetailsPage;

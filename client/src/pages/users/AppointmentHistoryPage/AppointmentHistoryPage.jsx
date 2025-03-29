import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import StatusButton from "../../../components/users/StatusButton/StatusButton";
import "./AppointmentHistoryPage.css";

const AppointmentHistoryPage = () => {
  const navigate = useNavigate();
  // Danh sách lịch hiến máu (mock data)
  const schedules = [
    {
      id: 1,
      hospital: "Bệnh viện Đa khoa Bình Dân Đà Nẵng",
      address: "376 Trần Cao Vân, Đà Nẵng",
      time: "7:00 - 11:00",
      date: "22/01/2025",
      registered: 10,
      total: 100,
      logo: "https://img.lovepik.com/free-png/20210924/lovepik-blood-donation-png-image_401327239_wh1200.png",
      status: "Đã hẹn lịch",
    },
    {
      id: 2,
      hospital: "Bệnh viện Ung Bướu Đà Nẵng",
      address: "Đường Hoàng Thị Loan, Liên Chiểu, Đà Nẵng",
      time: "7:00 - 11:00",
      date: "22/01/2025",
      registered: 10,
      total: 100,
      logo: "https://img.lovepik.com/free-png/20210924/lovepik-blood-donation-png-image_401327239_wh1200.png",
      status: "Hiến máu thành công",
    },
    {
      id: 3,
      hospital: "Bệnh viện Chợ Rẫy",
      address: "201B Nguyễn Chí Thanh, Quận 5, TP.HCM",
      time: "8:00 - 12:00",
      date: "25/01/2025",
      registered: 5,
      total: 50,
      logo: "https://img.lovepik.com/free-png/20210924/lovepik-blood-donation-png-image_401327239_wh1200.png",
      status: "Đã xóa lịch",
    },
  ];

  return (
    <div className="appointmentHistory-page">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        <h1 className="title">Lịch sử đã hẹn</h1>

        {/* Danh sách lịch */}
        <div className="schedule-list">
          {schedules.map((item) => (
            <div className="schedule-item" key={item.id}>
              <img
                src={item.logo}
                alt="Hospital Logo"
                className="hospital-logo"
              />
              <div className="schedule-info">
                <h3 className="hospital-name">{item.hospital}</h3>
                <p className="address">Địa chỉ: {item.address}</p>
                <p className="time">
                  Thời gian hiến máu:{" "}
                  <strong>
                    {item.time} - {item.date}
                  </strong>
                </p>
                <p className="registered">
                  Số lượng đăng ký:{" "}
                  <strong>
                    {item.registered}/{item.total}
                  </strong>
                </p>
              </div>
              <div className="status-btn">
                <StatusButton status={item.status} />
                <a
                  onClick={() => navigate("/users/HistoryDetailsPage")}
                  className="view-detail"
                  style={{ cursor: "pointer" }}>
                  Xem chi tiết
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default AppointmentHistoryPage;

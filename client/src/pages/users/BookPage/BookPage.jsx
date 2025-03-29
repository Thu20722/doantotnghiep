import React, { useState } from "react";
import { FaClock, FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import "./BookPage.css";
import CustomDatePicker from "../../../components/ui/react_datepicker";

const BookPage = () => {
  const navigate = useNavigate();
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
    },
  ];

  const [searchDate, setSearchDate] = useState("");
  const [filterOrg, setFilterOrg] = useState("Tất cả");

  return (
    <div className="book-page">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        <h1 className="title">Lịch hẹn của bạn</h1>
        <div className="content-wrapper">
          <div className="sidebar">
            <ul className="menu-list">
              <li className="menu-item active">
                <FaClock className="menu-icon" /> Thời gian và địa điểm
              </li>
              <li className="menu-item">
                <FaFileAlt className="menu-icon" /> Phiếu đăng ký hiến máu
              </li>
            </ul>
          </div>

          <div className="main-content">
            <div className="search-container">
              <div className="search-content">
                <span className="search-title">
                  Bạn cần tìm kiếm lịch hiến máu vào thời gian nào?
                </span>
                <div className="search-input-wrapper">
                  <CustomDatePicker
                    value={searchDate}
                    onChange={setSearchDate}
                  />
                  <button className="search-button">Tìm kiếm</button>
                </div>
              </div>

              <select
                value={filterOrg}
                onChange={(e) => setFilterOrg(e.target.value)}
                className="filter-select">
                <option value="Tất cả">Tất cả</option>
                <option value="Bệnh viện Đa khoa Bình Dân Đà Nẵng">
                  Bệnh viện Đa khoa Bình Dân Đà Nẵng
                </option>
                <option value="Bệnh viện Ung Bướu Đà Nẵng">
                  Bệnh viện Ung Bướu Đà Nẵng
                </option>
              </select>
            </div>

            <div className="schedule-list">
              {schedules
                .filter(
                  (item) =>
                    filterOrg === "Tất cả" || item.hospital === filterOrg
                )
                .map((item) => (
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
                    <button className="btn-book">Đặt lịch</button>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="continue-button-wrapper">
          <button
            onClick={() => navigate("/users/RegistrationFormPage")}
            className="btn-continue">
            TIẾP TỤC
          </button>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default BookPage;

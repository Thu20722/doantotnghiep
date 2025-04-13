import React, { useState } from "react";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import "./SearchPage.css";
import CustomDatePicker from "../../../components/ui/react_datepicker";

const SearchPage = () => {
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
    <div className="search-page">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        <h1 className="title">Lịch hiến máu</h1>
        <div className="search-container">
          <div className="search-content">
            <span className="search-title">
              Bạn cần tìm kiếm lịch hiến máu vào thời gian nào?
            </span>
            <div className="search-input-wrapper">
              <CustomDatePicker
                className="search-input-container"
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

        {/* Danh sách lịch */}
        <div className="schedule-list">
          {schedules
            .filter(
              (item) => filterOrg === "Tất cả" || item.hospital === filterOrg
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
                  <p className="address">Địa chỉ:{" "}{item.address}</p>
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

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;

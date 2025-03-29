import React from "react";
import {
  FaRegFileAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import "./AppointmentPage.css";
import journalIcon from "../../../assets/icon/journal-page.png";

const AppointmentPage = () => {
  const navigate = useNavigate();
  return (
    <div className="appointment-page">
      <Header />

      <div className="container">
        <h1 className="title">Lịch hẹn của bạn</h1>
        <div className="title-info">
          <h2>Thông tin đăng ký hiến máu</h2>
        </div>
        <div className="appointment-content">
          <div className="personal-info">
            <div className="info-box">
              <h3>Thông tin cá nhân</h3>
              <p className="user-details">
                <strong>Họ và tên:</strong>{" "}
                <span className="special-info">Ngô Thị Thanh Thư</span>
              </p>
              <p className="user-details">
                <strong>Số CMND/CCCD:</strong>{" "}
                <span className="special-info">051303004542</span>
              </p>
              <p className="user-details">
                <strong>Ngày sinh:</strong>{" "}
                <span className="special-info">20/07/2003</span>
              </p>
              <p className="user-details">
                <strong>Giới tính:</strong>{" "}
                <span className="special-info">Nữ</span>
              </p>
              <p className="user-details">
                <strong>Nghề nghiệp:</strong>{" "}
                <span className="special-info">Sinh viên</span>
              </p>
              <p className="user-details">
                <strong>Nhóm máu:</strong>{" "}
                <span className="special-info">-</span>
              </p>
            </div>

            <div className="info-box">
              <h3>Thông tin liên hệ</h3>
              <p className="contact-info">
                <FaMapMarkerAlt className="icon" /> Hòa Bình, Nghĩa Hòa, Tư
                Nghĩa, Quảng Ngãi
              </p>
              <p className="contact-info">
                <FaPhoneAlt className="icon" /> 0366392259
              </p>
              <p className="contact-info">
                <FaEnvelope className="icon" /> ngothu20072003@gmail.com
              </p>
            </div>
          </div>

          {/* Phiếu đăng ký hiến máu */}
          <div className="register-box">
            <h3>Phiếu đăng ký hiến máu</h3>
            <div className="empty-box">
              <img
                src={journalIcon}
                alt="Journal Page"
                className="empty-icon"
              />
              <p>Chưa có phiếu đăng ký hiến máu</p>
            </div>
          </div>
        </div>

        <div className="register-button">
          <button
            onClick={() => navigate("/users/BookPage")}
            className="btn-register">
            ĐĂNG KÝ HIẾN MÁU
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentPage;

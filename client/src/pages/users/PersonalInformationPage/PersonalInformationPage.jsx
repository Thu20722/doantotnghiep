import React from "react";
import { FaUser, FaFileInvoice } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import "./PersonalInformationPage.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegFileAlt,
} from "react-icons/fa";
const PersonalInformationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="personal-information-page">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        <h1 className="title"> Thông tin cá nhân</h1>
        <div className="content-wrapper">
          <div className="sidebar">
            <ul className="menu-list">
              <li
                className="menu-item active"
                onClick={() => {
                  navigate("/users/PartnerRegistration");
                }}>
                <FaUser className="menu-icon" /> Thông tin cá nhân
              </li>
              <li
                className="menu-item"
                onClick={() => {
                  console.log("Navigating...");
                  navigate("/users/PartnerRegistration");
                }}>
                <FaRegFileAlt className="menu-icon" /> Phiếu đăng ký đơn vị liên
                kết
              </li>
            </ul>
          </div>
          <div className="personal-info">
            <div className="info-box">
              <h3 className="tilte-personal">Thông tin cá nhân</h3>
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
              <p className="user-details">
                <strong>Số lần hiến máu:</strong>{" "}
                <span className="special-info">-</span>
              </p>
            </div>

            <div className="info-box">
              <h3 className="tilte-personal">Thông tin liên hệ</h3>
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
        </div>
        <div className="button-container">
          <button className="logout-button">ĐĂNG XUẤT</button>
          <button className="update-button">CẬP NHẬT</button>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default PersonalInformationPage;

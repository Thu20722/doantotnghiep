import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaSkype } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";
import LogoImage from "../../../assets/image/logofooter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Mô tả */}
        <div className="footer-section">
          <img src={LogoImage} alt="Logo" className="footer-logo" />
          <h2 className="footer-title">GIỌT MÁU HỒNG</h2>
          <p className="footer-text">Mỗi giọt máu cho đi - Một cuộc đời ở lại. Hãy chung tay vì mọi người cũng chính là vì bạn</p>
          <div className="footer-social">
            <FaFacebook className="social-icon" />
            <FaSkype className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>

        {/* Hỗ trợ */}
        <div className="footer-section">
          <h3 className="footer-heading">Hỗ trợ</h3>
          <ul className="footer-list">
            <li className="footer-item">Điều khoản sử dụng</li>
            <li className="footer-item">Đăng ký hiến máu</li>
          </ul>
        </div>

        {/* Liên kết */}
        <div className="footer-section">
          <h3 className="footer-heading">Liên kết</h3>
          <ul className="footer-list">
            <li className="footer-item">TT truyền máu Chợ Rẫy</li>
            <li className="footer-item">Bệnh viện BTH</li>
            <li className="footer-item">TT Hiến Máu Nhân Đạo</li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div className="footer-section">
          <h3 className="footer-heading">Liên hệ</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <FiPhone className="footer-icon" />
              <span>+84 333333</span>
            </li>
            <li className="footer-item">
              <FiMapPin className="footer-icon" />
              <span>48 Cao Thắng, Hải Châu, Đà Nẵng</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

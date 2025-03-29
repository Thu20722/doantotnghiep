import React from "react";
import {
  FaRegFileAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import "./RegitrationResultsPage.css";

const RegitrationResultsPage = () => {
  return (
    <div className="regitrationresult-page">
      <Header />

      <div className="container">
        <h1 className="title">Lịch hẹn của bạn</h1>
        <div className="title-info">
          <h2>Thông tin đăng ký hiến máu</h2>
        </div>
        <div className="appointment-content">
          {/* Cột trái: Thông tin cá nhân & liên hệ */}
          <div className="left-column">
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

          {/* Cột phải: Mã QR & Phiếu đăng ký hiến máu */}
          <div className="right-column">
            <div className="qr-box">
              <h3>Bạn đã đăng ký hiến máu</h3>
              <div className="qr-section">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=051303004542" alt="Mã QR" className="qr-image" />
                <p className="qr-text">
                  Giấy tờ tùy thân: <strong>051303004542</strong> <br />
                  Thời gian: 07:00 - 11:00 | 25/03/2025 <br />
                  Địa điểm: Bệnh viện Ung Bướu Đà Nẵng
                </p>
                <p className="qr-note">
                  Vui lòng mang giấy tờ tùy thân và mã QR khi đi hiến máu.
                </p>
              </div>
            </div>

            <div className="register-box">
              <h3>Phiếu đăng ký hiến máu</h3>
              <ul className="questionnaire">
                <li>
                  <strong>1.</strong> Anh/chị từng hiến máu chưa? <br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>2.</strong> Hiện tại, anh/chị có mắc bệnh lý nào không? <br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>3.</strong>Trước đây, anh/chị có từng mắc một trong các bệnh: viêm gan siêu vi B, C, HIV, vảy nến, phì đại tiền liệt tuyến, sốc phản vệ, tai biến mạch máu não, nhồi máu cơ tim, lupus ban đỏ, động kinh, ung thư, hen, được cấy ghép mô tạng?<br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>4.</strong> Trong 12 tháng gần đây, anh/chị có?{" "}
                  <br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>5.</strong> Trong 06 tháng gần đây, anh/chị có?{" "}
                  <br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>6.</strong>Trong 01 tháng gần đây, anh/chị có?{" "}
                  <br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>7.</strong> Trong 14 ngày gần đây, anh/chị có?{" "}
                  <br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>8.</strong> Trong 07 ngày gần đây, anh/chị có?{" "}
                  <br />
                  <span>Không</span>
                </li>
                <li>
                  <strong>9.</strong> Câu hỏi dành cho phụ nữ:{" "}
                  <br />
                  <span>Không</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="delete-button">
          <button className="btn-delete">XÓA ĐƠN ĐĂNG KÝ</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegitrationResultsPage;

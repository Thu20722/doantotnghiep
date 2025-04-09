import React from "react";
import { FaUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import "./PartnerRegistration.css";
import FileUploadButton from "../../../components/ui/fileUpload";

const PartnerRegistration = () => {
  const navigate = useNavigate();
  const handleFileSelect = (file) => {
    console.log("File đã chọn:", file ? file.name : "Không có file nào");
  };

  return (
    <div className="partner-registration-page">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        <h1 className="title">Đăng ký đơn vị liên kết</h1>

        <div className="content-wrapper">
          {/* Sidebar */}
          <div className="sidebar-user">
            <ul className="menu-list">
              <li className="menu-item" onClick={() => {
                  console.log("Navigating...");
                  navigate("/users/PersonalInformationPage");
                }}>
                <FaUser className="menu-icon" /> Thông tin cá nhân
              </li>
              <li
                className="menu-item active">
                <FaRegFileAlt className="menu-icon" /> Phiếu đăng ký đơn vị liên
                kết
              </li>
            </ul>
          </div>

          {/* Form đăng ký */}
          <div className="register-form">
            <div className="form-group-row">
              <div className="input-group">
                <label>Mã người dùng</label>
                <input type="text" value="TTT03" disabled />
              </div>

              <div className="input-group">
                <label>Mã đơn vị</label>
                <input type="text" placeholder="Nhập mã đơn vị" />
              </div>
            </div>

            <div className="input-group">
              <label>Tên đơn vị</label>
              <input type="text" placeholder="Vui lòng nhập tên đơn vị" />
            </div>

            <div className="form-group-row">
              <div className="input-group">
                <label>Email đơn vị</label>
                <input type="email" placeholder="Vui lòng nhập Email" />
              </div>

              <div className="input-group">
                <label>Số điện thoại</label>
                <input type="text" placeholder="Vui lòng nhập số điện thoại" />
              </div>
            </div>

            <div className="input-group">
              <label>Địa chỉ</label>
              <input type="text" placeholder="Vui lòng nhập địa chỉ cụ thể" />
            </div>

            <div className="upload">
              <label>Minh chứng</label>
              <FileUploadButton onFileSelect={handleFileSelect} />
            </div>
          </div>
        </div>

        <div className="register-button">
          <button className="btn-register">ĐĂNG KÝ LIÊN KẾT</button>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default PartnerRegistration;

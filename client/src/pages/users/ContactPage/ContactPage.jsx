import React from "react";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import bloodDonationImage from "../../../assets/image/lienhe.svg";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact">
      <div className="header">
        <Header />
      </div>
      <div className="contact-container">
        {/* Phần hình ảnh và tiêu đề */}
        <div className="image-container">
          <img
            src={bloodDonationImage}
            alt="Ngày hội hiến máu"
            className="blood-image"
          />
        </div>

        {/* Form nhập thông tin */}
        <div className="form-container">
          <h2 className="form-title">Gửi lời nhắn cho chúng tôi</h2>

          <div className="input-group">
            <label>Họ và tên</label>
            <input type="text" placeholder="Vui lòng nhập họ và tên" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Vui lòng nhập email" />
          </div>

          <div className="input-group">
            <label>Lời nhắn</label>
            <textarea placeholder="Vui lòng nhập lời nhắn"></textarea>
          </div>
          <div className="submit-container">
            <button className="submit-button">Gửi</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;

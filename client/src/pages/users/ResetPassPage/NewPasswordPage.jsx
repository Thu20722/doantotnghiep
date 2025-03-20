import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import SignUpImage from "../../../assets/image/nendkdn.svg";
import "./NewPasswordPage.css";

const NewPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    if (!password.trim() || !confirmPassword.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }

    console.log("Mật khẩu mới:", password);
    alert("Mật khẩu đã được cập nhật thành công!");

    navigate("/users/SignUpPage");
  };

  return (
    <div className="reset-password">
      <Header />

      <div className="reset-password-container">
        <img src={SignUpImage} alt="Background" className="signup-bg" />

        <div className="reset-password-form">
          <h2 className="reset-title">Đặt lại mật khẩu</h2>

          <div className="input-group">
            <label>Mật khẩu mới</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu mới"
              className="custom-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Nhập lại mật khẩu mới</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              className="custom-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button className="reset-button" onClick={handleResetPassword}>
            HOÀN TẤT
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewPasswordPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import SignUpImage from "../../../assets/image/nendkdn.svg";
import "./ResetPassPage.css";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [idCard, setIdCard] = useState("");
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (!idCard.trim() || !email.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    // Chuyển hướng đến trang xác nhận mã (VerifyCodePage)
    navigate("/users/VerifyCodePage");
  };

  const handleSignIn = () => {
    navigate("/users/SignInPage"); // Chuyển về trang đăng nhập
  };

  return (
    <div className="reset">
      <div className="reset-password">
        <div className="header">
          <Header />
        </div>

        <div className="reset-password-container">
          <img src={SignUpImage} alt="Background" className="signup-bg" />

          <div className="reset-password-form">
            <h2 className="reset-title">Đặt lại mật khẩu</h2>

            <div className="input-group">
              <label>Số CMND/CCCD</label>
              <input
                type="text"
                placeholder="Vui lòng nhập CMND/CCCD"
                className="custom-input"
                value={idCard}
                onChange={(e) => setIdCard(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                placeholder="Vui lòng nhập Email"
                className="custom-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button className="reset-button" onClick={handleContinue}>
              TIẾP TỤC
            </button>

            <div className="reset-footer">
              Bạn đã có tài khoản?{" "}
              <span className="login-link" onClick={handleSignIn}>
                ĐĂNG NHẬP
              </span>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

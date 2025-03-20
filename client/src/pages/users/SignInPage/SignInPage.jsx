import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import SignUpImage from "../../../assets/image/nendkdn.svg";
import "./SignInPage.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [cmnd, setCmnd] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!cmnd.trim() || !password.trim()) {
      alert("Vui lòng nhập đầy đủ Số CMND/CCCD và Mật khẩu!");
      return;
    }

    alert("Đăng nhập thành công!");
    navigate("/users/HomePage"); // Chuyển hướng đến trang chủ
  };

  const handleForgotPassword = () => {
    navigate("/users/ResetPasswordPage"); // Chuyển hướng đến trang reset mật khẩu
  };

  const handleSignUp = () => {
    navigate("/users/SignUpPage"); 
  };

  return (
    <div className="signin">
      <div className="signin-page">
        <div className="header">
          <Header />
        </div>

        <div className="signin-container">
          <img src={SignUpImage} alt="Background" className="signup-bg" />
          <div className="signin-form">
            <h2 className="signin-title">Đăng nhập</h2>

            <div className="input-group">
              <label>Số CMND/CCCD</label>
              <input
                type="text"
                placeholder="Vui lòng nhập CMND/CCCD"
                className="custom-input"
                value={cmnd}
                onChange={(e) => setCmnd(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Mật khẩu</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Vui lòng nhập mật khẩu"
                  className="custom-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>

            <div className="forgot-password" onClick={handleForgotPassword}>
              Bạn quên mật khẩu?
            </div>

            <button className="signin-button" onClick={handleLogin}>
              Đăng nhập
            </button>

            <div className="signin-footer">
              Bạn chưa có tài khoản?{" "}
              <span className="signin-link" onClick={handleSignUp}>
                ĐĂNG KÝ
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

export default SignInPage;

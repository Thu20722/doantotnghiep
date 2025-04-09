import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import SignUpImage from "../../../assets/image/Login.svg";
import LogoLogin from "../../../assets/image/LogoLogin.svg";
import BlooodLogin from "../../../assets/image/BloodLogin.svg";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [cmnd, setCmnd] = useState(""); // Fix lỗi biến cmnd
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Fix lỗi biến showPassword

  const handleLogin = (e) => {
    e.preventDefault();
    // Thêm logic kiểm tra đăng nhập ở đây
    console.log("Đăng nhập với:", cmnd, password);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="img-left">
          <img src={LogoLogin} alt="LogoLogin" className="logo-ig" />
          <img src={BlooodLogin} alt="BloodLogin" className="blood-ig" />
        </div>
        <div className="login-form">
          <div className="login-header">
            <h1>GIỌT MÁU HỒNG</h1>
            <p>MỖI GIỌT MÁU CHO ĐI - MỘT CUỘC ĐỜI Ở LẠI</p>
          </div>
          <div className="login-title">
            <h2 className="title">Đăng nhập</h2>
          </div>
          <div className="login-group">
            <label>Số CMND/CCCD</label>
            <input
              type="text"
              placeholder="Vui lòng nhập CMND/CCCD"
              className="custom-input"
              value={cmnd}
              onChange={(e) => setCmnd(e.target.value)}
            />
          </div>

          <div className="login-group">
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
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>

          <button className="login-button" onClick={handleLogin}>
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

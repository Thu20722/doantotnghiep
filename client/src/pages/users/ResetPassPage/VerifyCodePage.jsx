import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import SignUpImage from "../../../assets/image/nendkdn.svg";
import "./VerifyCodePage.css";

const VerifyCodePage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let countdown;
    if (resendDisabled) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setResendDisabled(false);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [resendDisabled]);

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Chỉ nhận số
    if (value.length <= 6) {
      setOtp(value);
      setError("");
    }
  };

  const handleVerify = () => {
    if (otp.length !== 6) {
      setError("Mã OTP phải có 6 chữ số.");
      return;
    }

    if (otp === "123456") {
      alert("Mã OTP hợp lệ! Đang chuyển hướng...");
      console.log("Mã OTP hợp lệ:", otp);
      navigate("/users/NewPasswordPage");
    } else {
      setError("Mã OTP không đúng. Vui lòng thử lại!");
    }
  };

  const handleResendOtp = () => {
    if (resendDisabled) return;
    alert("Mã OTP mới đã được gửi đến Email của bạn!");
    setResendDisabled(true);
    setTimer(60);
  };

  return (
    <div className="verify-code">
      <Header />
      <div className="verify-code-container">
        <img src={SignUpImage} alt="Background" className="signup-bg" />
        <div className="verify-code-form">
          <h2 className="verify-title">Xác nhận mã OTP</h2>
          <p className="verify-description">
            Chúng tôi đã gửi một mã OTP đến email của bạn. Vui lòng kiểm tra và nhập mã bên dưới.
          </p>
          <div className="input-group_1">
            <label>Nhập mã OTP</label>
            <input
              type="text"
              placeholder="Nhập mã OTP gồm 6 chữ số"
              className="custom-input_1"
              value={otp}
              onChange={handleOtpChange}
              maxLength={6}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <button className="verify-button-1" onClick={handleVerify} disabled={otp.length !== 6}>
            XÁC NHẬN
          </button>
          <div className="verify-footer">
            Không nhận được mã? {" "}
            <span className={`resend-link ${resendDisabled ? "disabled" : ""}`} onClick={handleResendOtp}>
              {resendDisabled ? `Gửi lại sau ${timer}s` : "Gửi lại"}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyCodePage;
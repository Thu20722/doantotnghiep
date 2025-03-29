import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import SignUpImage from "../../../assets/image/nendkdn.svg";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idCard: "",
    fullName: "",
    birthDate: "",
    gender: "",
    mobile: "",
    phone: "",
    email: "",
    job: "",
    address: "",
    district: "",
    ward: "",
    street: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = () => {
    if (!formData.idCard || !formData.fullName || !formData.birthDate || !formData.gender || !formData.mobile || !formData.email || !formData.password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    alert("Đăng ký thành công!");
    navigate("/users/Verificationpage");
  };

  return (
    <div className="signup">
      <div className="header">
          <Header />
        </div>
      <div className="signup-container">
        <img src={SignUpImage} alt="Background" className="signup-bg" />
        <div className="signup-form">
          <h2 className="signup-title">Đăng ký</h2>
          <div className="input-group"><label>Số CMND/CCCD</label><input type="text" name="idCard" onChange={handleChange} placeholder="Vui lòng nhập CMND/CCCD" /></div>
          <div className="input-group"><label>Họ và tên</label><input type="text" name="fullName" onChange={handleChange} placeholder="Vui lòng nhập họ và tên" /></div>
          <div className="input-group"><label>Ngày sinh</label><input type="date" name="birthDate" onChange={handleChange} /></div>
          <div className="input-group"><label>Giới tính</label><select name="gender" onChange={handleChange}><option value="">Chọn giới tính</option><option value="Nam">Nam</option><option value="Nữ">Nữ</option></select></div>
          <div className="input-group"><label>Số điện thoại di động</label><input type="text" name="mobile" onChange={handleChange} placeholder="VD: 0909090909" /></div>
          <div className="input-group"><label>Số điện thoại bàn (nếu có)</label><input type="text" name="phone" onChange={handleChange} placeholder="VD: 0909090909" /></div>
          <div className="input-group"><label>Email</label><input type="email" name="email" onChange={handleChange} placeholder="Vui lòng nhập email" /></div>
          <div className="input-group"><label>Nghề nghiệp</label><input type="text" name="job" onChange={handleChange} placeholder="Vui lòng nhập nghề nghiệp" /></div>
          <div className="input-addr"><label>Địa chỉ liên hệ</label></div>
          <div className="input-group-row">
            <select name="district" onChange={handleChange}><option value="">Tỉnh</option></select>
            <select name="ward" onChange={handleChange}><option value="">Phường/Xã</option></select>
          </div>
          <div className="input-group"><input type="text" name="street" onChange={handleChange} placeholder="Vui lòng nhập số nhà tên đường" /></div>
          <div className="input-group"><label>Mật khẩu</label>
            <div className="password-container">
              <input type={formData.showPassword ? "text" : "password"} name="password" onChange={handleChange} placeholder="Tối thiểu 6 ký tự" />
              <button type="button" onClick={togglePasswordVisibility}>{formData.showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</button>
            </div>
          </div>
          <button className="signup-button" onClick={handleSubmit}>TIẾP TỤC</button>
          <div className="signup-footer">Bạn đã có tài khoản? <span className="signup-link" onClick={() => navigate("/users/SignInPage")}>ĐĂNG NHẬP</span></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
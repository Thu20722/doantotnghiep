import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImage from "../../../assets/image/Logo.svg";
import { Button } from "@chakra-ui/react";
import { Avatar } from "/src/components/ui/avatar.jsx";

const Header = () => {
  const [user, setUser] = useState(null);

  // Xử lý khi nhấn đăng ký
  const handleRegister = () => {
    // Giả lập đăng ký, có thể thay bằng logic gọi API đăng ký
    setUser({
      name: "Ngô Thị Thanh Thư",
      // avatar: "https://i.pravatar.cc/150?img=5",
    });
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" aria-label="Logo" />
      </div>
      <nav className="navbar">
        <Link to="/" title="Trang chủ">
          Trang chủ
        </Link>
        <Link to="/appointments" title="Lịch hẹn của bạn">
          Lịch hẹn của bạn
        </Link>
        <Link to="/history" title="Lịch sử đã hẹn">
          Lịch sử đã hẹn
        </Link>
        <Link to="/certifications" title="Chứng nhận">
          Chứng nhận
        </Link>
        <Link to="/faq" title="Hỏi-đáp">
          Hỏi-đáp
        </Link>
        <Link to="/contact" title="Liên hệ">
          Liên hệ
        </Link>
      </nav>
      <div className="user">
        {user ? (
          // Nếu user đã đăng ký, hiển thị avatar + tên
          <div className="user-info">
            <Avatar src={user.avatar} style={{ backgroundColor: "#ECF4FD" }} />
            <span>{user.name}</span>
          </div>
        ) : (
          // Nếu chưa đăng ký, hiển thị nút đăng ký
          <Button colorScheme="blue" onClick={handleRegister}>
            Đăng ký
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;

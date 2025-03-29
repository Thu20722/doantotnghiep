import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../../../assets/image/Logo.svg";
import { Button } from "@chakra-ui/react";
import { Avatar } from "/src/components/ui/avatar.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleRegister = () => {
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
        <NavLink
          to="/users/HomePage"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Trang chủ người dùng">
          Trang chủ
        </NavLink>
        <NavLink
          to="/users/AppointmentPage"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Lịch hẹn">
          Lịch hẹn
        </NavLink>
        <NavLink
          to="/users/AppointmentHistoryPage"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Lịch sử hẹn">
          Lịch sử hẹn
        </NavLink>
        <NavLink
          to="/users/FaqPage"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Hỏi đáp">
          Hỏi-đáp
        </NavLink>
        <NavLink
          to="/users/ContactPage"
          className={({ isActive }) => (isActive ? "active" : "")}
          title="Liên hệ">
          Liên hệ
        </NavLink>
      </nav>
      <div className="user">
        {user ? (
          <div
            className="user-info"
            onClick={() => navigate("/users/PersonalInformationPage")}
            style={{ cursor: "pointer" }}>
            <Avatar src={user.avatar} style={{ backgroundColor: "#ECF4FD" }} />
            <span>{user.name}</span>
          </div>
        ) : (
          <Button colorScheme="blue" onClick={handleRegister}>
            Đăng ký
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;

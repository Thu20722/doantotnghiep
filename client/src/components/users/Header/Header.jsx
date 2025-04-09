import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import logoImage from "../../../assets/image/Logo.svg";
import { Avatar } from "/src/components/ui/avatar.jsx";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleRegister = () => {
    const newUser = {
      name: "Ngô Thị Thanh Thư",
      avatar: "https://i.pravatar.cc/150?img=5",
    };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" aria-label="Logo" />
      </div>

      <nav className="navbar">
        {[
          { path: "/users/HomePage", label: "Trang chủ" },
          { path: "/users/AppointmentPage", label: "Lịch hẹn" },
          { path: "/users/AppointmentHistoryPage", label: "Lịch sử hẹn" },
          { path: "/users/FaqPage", label: "Hỏi - Đáp" },
          { path: "/users/ContactPage", label: "Liên hệ" },
        ].map((item) => (
          <NavLink key={item.path} to={item.path} activeClassName="active">
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="user">
        {user ? (
          <div
            className="user-info"
            onClick={() => navigate("/users/PersonalInformationPage")}
            style={{ cursor: "pointer" }}>
            <Avatar src={user.avatar} />
            <span>{user.name}</span>
          </div>
        ) : (
          <Button colorScheme="blue" onClick={() => navigate("/users/SignInPage")}>
            Đăng nhập 
          </Button>
         )} 
      </div>
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlinePostAdd, MdLogout } from "react-icons/md";
import { FaHospital } from "react-icons/fa";
import { IoSettingsOutline, IoPeopleOutline } from "react-icons/io5";
import { GiMedicalDrip } from "react-icons/gi";
import logo from "../../../assets/image/Logo.svg";
import "./Sidebar.css";

const menuItems = [
  { path: "/management/UsersPage", key: "userList", icon: <RxDashboard />, label: "Danh sách người dùng" },
  { path: "/management/PostApprovalPage", key: "approvePost", icon: <MdOutlinePostAdd />, label: "Duyệt bài đăng" },
  { path: "/management/BloodDonationCampaignPage", key: "bloodDonation", icon: <GiMedicalDrip />, label: "Đợt hiến máu" },
  { path: "/management/HospitalManagementPage", key: "hospitals", icon: <FaHospital />, label: "Bệnh viện" },
  { path: "/management/LinkedAgencyPage", key: "partners", icon: <IoPeopleOutline />, label: "Đơn vị liên kết" },
];

const Sidebar = () => {
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState("userList");

  useEffect(() => {
    const matchedItem = menuItems.find((item) => location.pathname.startsWith(item.path));
    if (matchedItem) {
      setTabSelected(matchedItem.key);
    } else {
      setTabSelected("userList");
    }
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <Link key={item.key} to={item.path}>
            <div className={`menu-item ${tabSelected === item.key ? "active" : ""}`}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="sidebar-footer">
        <div className={`menu-item ${tabSelected === "settings" ? "active" : ""}`} onClick={() => setTabSelected("settings")}>
          <IoSettingsOutline className="menu-icon" />
          <span>Cài đặt</span>
        </div>
        <div className="menu-item logout" onClick={() => setTabSelected("logout")}>
          <MdLogout className="menu-icon" />
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

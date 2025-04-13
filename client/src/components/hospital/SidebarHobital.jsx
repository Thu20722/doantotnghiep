import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlinePostAdd, MdLogout } from "react-icons/md";
import { IoSettingsOutline, IoPeopleOutline, IoSend } from "react-icons/io5";
import { FaHospitalUser} from "react-icons/fa";
import { GiMedicalDrip } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdAssignmentInd } from "react-icons/md";
import logo from "../../assets/image/Logo.svg";

const menuItems = [
  { path: "/hospital/RegisterBloodCampaignPage", key: "registerCampaign", icon: <GiMedicalDrip />, label: "Đăng ký đợt hiến máu" },
  { path: "/hospital/PostListPage", key: "postList", icon: <MdOutlinePostAdd />, label: "Danh sách bài đăng" },
  { path: "/hospital/RegistrationListPage", key: "registrationList", icon: <HiOutlineUserGroup />, label: "Danh sách đăng ký" },
  { path: "/hospital/SendRequestPage", key: "sendRequest", icon: <IoSend />, label: "Gửi yêu cầu" },
  { path: "/hospital/StaffListPage", key: "staffList", icon: <IoPeopleOutline />, label: "Danh sách nhân viên" },
  { path: "/hospital/HospitalInfoPage", key: "hospitalInfo", icon: <FaHospitalUser />, label: "Thông tin bệnh viện" },
  { path: "/hospital/StaffAssignmentPage", key: "staffAssignment", icon: <MdAssignmentInd />, label: "Phân công nhân viên" },
];

const SidebarHobital = () => {
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState("registerCampaign");

  useEffect(() => {
    const matchedItem = menuItems.find((item) => location.pathname.startsWith(item.path));
    if (matchedItem) {
      setTabSelected(matchedItem.key);
    } else {
      setTabSelected("registerCampaign");
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

export default SidebarHobital;

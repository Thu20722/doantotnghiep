import React from "react";
import { GoPlus } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";

import { IoSearch } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import BloodDonationCampaignTable from "./RegisterBloodCampaignTable/RegisterBloodCampaignTable";
import HeaderAD from "../../../components/auth/Header/Header";
import Sidebar from "../../../components/hospital/SidebarHobital";

const RegisterBloodCampaignPage = () => {
  return (
    <div className="blood-campaign-hospital-page">
      <Sidebar />

      <div className="main-mg">
        <HeaderAD />

        <div className="container-mg">
          <div className="header-mg">
            <span className="title-mg">Đợt hiến máu</span>
            <div className="actions-mg">
              <button className="export-btn">
                <PiExportBold className="icon" />
                <span>Export</span>
              </button>
              {/* <button className="add-btn">
                <GoPlus className="icon" />
                <span>Tạo mới</span>
              </button> */}
            </div>
          </div>

          <div className="toolbar-mg">
            <div className="search-box-mg">
              <IoSearch className="icon" />
              <input
                type="text"
                placeholder="Nhập thông tin chiến dịch cần tìm..."
              />
            </div>
            <button className="delete-btn">
              <FaRegTrashAlt className="icon" />
              <span>Xóa tất cả</span>
            </button>
          </div>

          <div className="blood-donation-table-container">
            <BloodDonationCampaignTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBloodCampaignPage;

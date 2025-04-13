import React from "react";
import {FaRegTrashAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import RegistrationListTable from "./RegistrationListTable/RegistrationListTable";
import HeaderAD from "../../../components/auth/Header/Header";
import Sidebar from "../../../components/hospital/SidebarHobital";
import "./RegistrationListPage.css";

const RegistrationListPage = () => {
  return (
    <div className="registration-list-page">
      <Sidebar />

      <div className="main-mg">
        <HeaderAD />

        <div className="container-mg">
          <div className="header-mg">
            <span className="title-mg">Danh sách người đăng ký</span>
            <div className="actions-mg">
              <button className="export-btn">
                <PiExportBold className="icon" />
                <span>Export</span>
              </button>
              <button className="delete-btn">
                <FaRegTrashAlt className="icon" />
                <span>Xóa tất cả</span>
              </button>
            </div>
          </div>
          <div className="toolbar-mg">
            <div className="search-box-mg">
              <IoSearch className="icon" />
              <input type="text" placeholder="Nhập thông tin cần tìm" />
            </div>
            <div className="dropdown-filter-mg">
              <select className="filter-select-mg">
                <option value="">Đợt tổ chức</option>
                <option value="dot1">Đợt 1 - BV Ung Bướu</option>
                <option value="dot2">Đợt 2 - BV Huyết học</option>
              </select>
            </div>
          </div>

          {/* Bảng danh sách */}
          <div className="registration-table-container">
            <RegistrationListTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationListPage;

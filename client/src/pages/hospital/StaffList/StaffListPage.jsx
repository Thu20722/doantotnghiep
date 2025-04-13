import React from "react";
import { GoPlus } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";

import StaffListTable from "./StaffListTable/StaffListTable";
import HeaderAD from "../../../components/auth/Header/Header";
import Sidebar from "../../../components/hospital/SidebarHobital";

const StaffListPage = () => {
  return (
    <div className="staff-list-page">
      <Sidebar />

      <div className="main-mg">
        <HeaderAD />

        <div className="container-mg">
          <div className="header-mg">
            <span className="title-mg">Danh sách nhân viên</span>
            <div className="actions-mg">
              <button className="export-btn">
                <PiExportBold className="icon" />
                <span>Export</span>
              </button>
              <button className="add-btn">
                <GoPlus className="icon" />
                <span>Thêm nhân viên</span>
              </button>
            </div>
          </div>

          <div className="toolbar-mg">
            <div className="search-box-mg">
              <IoSearch className="icon" />
              <input type="text" placeholder="Nhập thông tin cần tìm" />
            </div>
            <button className="delete-btn">
              <FaRegTrashAlt className="icon" />
              <span>Xóa tất cả</span>
            </button>
          </div>

          <div className="staff-table-container">
            <StaffListTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffListPage;

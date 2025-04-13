import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { FaRegTrashAlt } from "react-icons/fa";
import { IoSearch } from 'react-icons/io5';
import { PiExportBold } from 'react-icons/pi';
import UsersTable from './UsersTable/UsersTable';
import './UsersPage.css';
import HeaderAD from "../../../components/auth/Header/Header";
import Sidebar from "../../../components/management/Sidebar/Sidebar";
import ConfirmPopup from "../../../components/auth/ConfirmPopup/ConfirmPopup";

const UsersPage = () => {
  const [showDeleteAllPopup, setShowDeleteAllPopup] = useState(false);

  const handleDeleteAllClick = () => {
    setShowDeleteAllPopup(true); 
  };

  const handleConfirmDeleteAll = () => {
    console.log("Đã xóa tất cả người dùng");
    setShowDeleteAllPopup(false);
  };

  const handleCancelDeleteAll = () => {
    setShowDeleteAllPopup(false);
  };

  return (
    <div className="users-page">
      <Sidebar />

      <div className="main-mg">
        <HeaderAD />

        <div className="container-mg">
          <div className="header-mg">
            <span className="title-mg">Danh sách người dùng</span>
            <div className="actions-mg">
              <button className="export-btn">
                <PiExportBold className="icon" />
                <span>Export</span>
              </button>
              {/* <button className="add-btn">
                <GoPlus className="icon" />
                <span>Add User</span>
              </button> */}
            </div>
          </div>

          <div className="toolbar-mg">
            <div className="search-box-mg">
              <IoSearch className="icon" />
              <input type="text" placeholder="Nhập thông tin cần tìm..." />
            </div>
            <button className="delete-btn" onClick={handleDeleteAllClick}>
              <FaRegTrashAlt className="icon" />
              <span>Xóa tất cả</span>
            </button>
          </div>

          <div className="table-container-mg">
            <UsersTable />
          </div>
        </div>
      </div>

      {showDeleteAllPopup && (
        <ConfirmPopup
          message="Bạn có chắc muốn xóa tất cả người dùng?"
          onConfirm={handleConfirmDeleteAll}
          onCancel={handleCancelDeleteAll}
        />
      )}
    </div>
  );
};

export default UsersPage;

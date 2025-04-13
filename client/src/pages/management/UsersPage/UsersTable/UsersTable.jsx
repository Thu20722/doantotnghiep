import React, { useState, useEffect } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination";
import "./UsersTable.css";
import ConfirmPopup from "../../../../components/auth/ConfirmPopup/ConfirmPopup";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: "#3020121",
    name: "Trần Thanh Tâm",
    dob: "25/1/2003",
    email: "hoanglam@gmail.com",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    bloodType: "1",
    role: "Người dùng",
  },
  {
    id: "#3020112",
    name: "Trần Thanh Tâm",
    dob: "25/1/2003",
    email: "hoanglam@gmail.com",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    bloodType: "1",
    role: "Đơn vị liên kết",
  },
  {
    id: "#3020023",
    name: "Trần Thanh Tâm",
    dob: "25/1/2003",
    email: "hoanglam@gmail.com",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    bloodType: "1",
    role: "Người dùng",
  },
  {
    id: "#3020034",
    name: "Nguyễn Văn A",
    dob: "10/2/2000",
    email: "nguyenvana@gmail.com",
    address: "12 Nguyễn Văn Linh, Đà Nẵng",
    bloodType: "2",
    role: "Người dùng",
  },
  {
    id: "#3020035",
    name: "Nguyễn Văn A",
    dob: "10/2/2000",
    email: "nguyenvana@gmail.com",
    address: "12 Nguyễn Văn Linh, Đà Nẵng",
    bloodType: "2",
    role: "Người dùng",
  },
  {
    id: "#3020046",
    name: "Lê Thị B",
    dob: "5/9/2001",
    email: "lethib@gmail.com",
    address: "100 Trần Hưng Đạo, Đà Nẵng",
    bloodType: "3",
    role: "Đơn vị liên kết",
  },
  {
    id: "#3020047",
    name: "Lê Thị B",
    dob: "5/9/2001",
    email: "lethib@gmail.com",
    address: "100 Trần Hưng Đạo, Đà Nẵng",
    bloodType: "3",
    role: "Đơn vị liên kết",
  },
  {
    id: "#3020048",
    name: "Lê Thị B",
    dob: "5/9/2001",
    email: "lethib@gmail.com",
    address: "100 Trần Hưng Đạo, Đà Nẵng",
    bloodType: "3",
    role: "Đơn vị liên kết",
  },
];

const ITEMS_PER_PAGE = 6;

const UsersTable = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]); // Trạng thái của người dùng đã chọn
  const [selectAll, setSelectAll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Chia dữ liệu theo trang
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    console.log("Đã xóa người dùng:", userToDelete);
    setShowPopup(false);
  };

  // Cập nhật trạng thái chọn tất cả
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allIds = data.map((user) => user.id); // Lấy tất cả ID người dùng từ toàn bộ dữ liệu
      setSelectedUsers(allIds);
    } else {
      setSelectedUsers([]); // Bỏ chọn tất cả
    }
  };

  // Cập nhật trạng thái chọn từng người dùng
  const handleCheckboxChange = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  useEffect(() => {
    // Kiểm tra xem tất cả các người dùng trong trang hiện tại đã được chọn chưa
    const allIds = paginatedData.map((user) => user.id);
    const allSelected = allIds.every((id) => selectedUsers.includes(id));
    setSelectAll(allSelected);
  }, [selectedUsers, paginatedData]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số lần hiến máu</th>
            <th>Quyền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td style={{ color: "#2F80ED" }}>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.bloodType}</td>
              <td>{user.role}</td>
              <td className="icon-td">
                <div className="icon-container">
                  <span
                    className="tb-icon"
                    onClick={() =>
                      navigate(`/management/UsersDetails/${user.id}`)
                    }
                  >
                    <FaEye />
                  </span>
                  <span
                    className="tb-icon"
                    onClick={() =>
                      navigate(`/management/UsersUpdate/${user.id}`)
                    }
                  >
                    <LuPencil />
                  </span>
                  <span
                    className="tb-icon"
                    onClick={() => handleDeleteClick(user)}
                  >
                    <FaRegTrashAlt />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      {showPopup && (
        <ConfirmPopup
          message={`Bạn có chắc muốn xóa người dùng ${userToDelete?.name}?`}
          onConfirm={confirmDelete}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default UsersTable;

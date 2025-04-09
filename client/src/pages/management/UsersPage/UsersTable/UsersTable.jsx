import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination"; // Import component Pagination
import "./UsersTable.css";

const data = [
  {
    id: "#302012",
    name: "Trần Thanh Tâm",
    dob: "25/1/2003",
    email: "hoanglam@gmail.com",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    bloodType: "1",
    role: "Người dùng",
  },
  {
    id: "#302011",
    name: "Trần Thanh Tâm",
    dob: "25/1/2003",
    email: "hoanglam@gmail.com",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    bloodType: "1",
    role: "Đơn vị liên kết",
  },
  {
    id: "#302002",
    name: "Trần Thanh Tâm",
    dob: "25/1/2003",
    email: "hoanglam@gmail.com",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    bloodType: "1",
    role: "Người dùng",
  },
  {
    id: "#302003",
    name: "Nguyễn Văn A",
    dob: "10/2/2000",
    email: "nguyenvana@gmail.com",
    address: "12 Nguyễn Văn Linh, Đà Nẵng",
    bloodType: "2",
    role: "Người dùng",
  },
  {
    id: "#302003",
    name: "Nguyễn Văn A",
    dob: "10/2/2000",
    email: "nguyenvana@gmail.com",
    address: "12 Nguyễn Văn Linh, Đà Nẵng",
    bloodType: "2",
    role: "Người dùng",
  },
  {
    id: "#302004",
    name: "Lê Thị B",
    dob: "5/9/2001",
    email: "lethib@gmail.com",
    address: "100 Trần Hưng Đạo, Đà Nẵng",
    bloodType: "3",
    role: "Đơn vị liên kết",
  },
  {
    id: "#302004",
    name: "Lê Thị B",
    dob: "5/9/2001",
    email: "lethib@gmail.com",
    address: "100 Trần Hưng Đạo, Đà Nẵng",
    bloodType: "3",
    role: "Đơn vị liên kết",
  },
  {
    id: "#302004",
    name: "Lê Thị B",
    dob: "5/9/2001",
    email: "lethib@gmail.com",
    address: "100 Trần Hưng Đạo, Đà Nẵng",
    bloodType: "3",
    role: "Đơn vị liên kết",
  },
];

const ITEMS_PER_PAGE = 10;

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
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
                <input type="checkbox" />
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
                  <span className="tb-icon">
                    <FaEye />
                  </span>
                  <span className="tb-icon">
                    <LuPencil />
                  </span>
                  <span className="tb-icon">
                    <FaRegTrashAlt />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Sử dụng component Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default UsersTable;

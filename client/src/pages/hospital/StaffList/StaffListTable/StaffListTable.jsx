import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination";

const stafflistData = [ {
  id: `#3323333233`,
  name: "Hoàng Ngọc Lâm",
  cccd: "2111505311",
  gender: "Nam",
  position: "Điều dưỡng",
  email: "lamnvyt@gamil.com",
}];

const ITEMS_PER_PAGE = 10;

const StaffListTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(stafflistData.length / ITEMS_PER_PAGE);
  const paginatedData = stafflistData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>STT</th>
            <th>Mã nhân viên</th>
            <th>Tên nhân viên</th>
            <th>CCCD</th>
            <th>Giới tính</th>
            <th>Chức vụ</th>
            <th>Email</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((staff, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.cccd}</td>
              <td>{staff.gender}</td>
              <td>{staff.position}</td>
              <td>{staff.email}</td>
              <td className="icon-td">
                <div className="icon-container">
                  <span className="tb-icon">
                    <FaEye />
                  </span>
                  <span className="tb-icon">
                    < LuPencil />
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

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default StaffListTable;

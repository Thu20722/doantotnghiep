import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import StatusRegistrationList from "../../../../components/auth/StatusRegistrationList/StatusRegistrationList";
import Pagination from "../../../../components/ui/pagination/Pagination";

const registrationData = [{
//   id: i + 1,
  organization: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
  fullName: "Nguyễn Văn A",
  occupation: "Sinh viên",
  gender: "Nam",
  status: "Đã cập nhật",
}];

const ITEMS_PER_PAGE = 10;

const RegistrationListTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(registrationData.length / ITEMS_PER_PAGE);
  const paginatedData = registrationData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>STT</th>
            <th>Tên đợt tổ chức</th>
            <th>Họ tên</th>
            <th>Ngành nghề</th>
            <th>Giới tính</th>
            <th style={{ textAlign: "center" }}>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
              <td>{item.organization}</td>
              <td>{item.fullName}</td>
              <td>{item.occupation}</td>
              <td>{item.gender}</td>
              <td>
                <StatusRegistrationList status={item.status} />
              </td>
              <td className="icon-td">
                <div className="icon-container">
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

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default RegistrationListTable;

import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination";

const assignmentData = [
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Lấy máu"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Khám lâm sàng"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Xét nghiệm"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Xét nghiệm"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Xét nghiệm"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Khám lâm sàng"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Khám lâm sàng"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Khám lâm sàng"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Khám lâm sàng"
  },
  {
    staffId: "NV001",
    staffName: "Hoàng Ngọc Lâm",
    campaignId: "HM001",
    task: "Khám lâm sàng"
  }
];

const ITEMS_PER_PAGE = 10;

const StaffAssignmentTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(assignmentData.length / ITEMS_PER_PAGE);
  const paginatedData = assignmentData.slice(
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
            <th>Mã nhân viên</th>
            <th>Tên nhân viên</th>
            <th>Mã đợt hiến máu</th>
            <th>Nhiệm vụ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.staffId}</td>
              <td>{item.staffName}</td>
              <td>{item.campaignId}</td>
              <td>{item.task}</td>
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

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default StaffAssignmentTable;

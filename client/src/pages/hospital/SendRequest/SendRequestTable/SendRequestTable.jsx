import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import Pagination from "../../../../components/ui/pagination/Pagination";
import StatusPost from "../../../../components/auth/StatusPost/StatusPost";

const sendData = [
  {
    id: "#302012",
    name: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    quantity: 100,
    unitCode: "DSK",
    startDate: "25/1/2025",
    endDate: "26/1/2025",
    reason: "Cần thêm nguồn máu vào kho máu",
    status: "Đã xác nhận"
  },
  {
    id: "#302012",
    name: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    quantity: 100,
    unitCode: "DSK",
    startDate: "25/1/2025",
    endDate: "26/1/2025",
    reason: "Cần thêm nguồn máu vào kho máu",
    status: "Chờ xác nhận"
  },
  {
    id: "#302012",
    name: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    quantity: 100,
    unitCode: "DSK",
    startDate: "25/1/2025",
    endDate: "26/1/2025",
    reason: "Cần thêm nguồn máu vào kho máu",
    status: "Hủy yêu cầu"
  }
];

const ITEMS_PER_PAGE = 10;

const SendRequestTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(sendData.length / ITEMS_PER_PAGE);
  const paginatedData = sendData.slice(
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
            <th>Tên đợt tổ chức</th>
            <th>Số lượng</th>
            <th>Mã đơn vị</th>
            <th>Thời gian bắt đầu</th>
            <th>Thời gian kết thúc</th>
            <th>Lý do</th>
            <th style={{ textAlign: "center" }}>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((request, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.quantity}</td>
              <td>{request.unitCode}</td>
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>{request.reason}</td>
              <td>
                <StatusPost status={request.status} />
              </td>
              <td className="icon-td">
                <div className="icon-container">
                  <span className="tb-icon">
                    <FaEye />
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

export default SendRequestTable;

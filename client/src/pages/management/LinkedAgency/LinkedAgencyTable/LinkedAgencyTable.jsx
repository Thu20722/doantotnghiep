import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination";
import StatusLinkedAgency from "../../../../components/auth/StatusLinkedAgency/StatusLinkedAgency";

// Ví dụ dữ liệu cho đơn vị liên kết
const linkedAgencyData = [
  {
    id: "#302012",
    name: "Bệnh viện Đa khoa",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    email: "benhvien@dakhoadanang.vn",
    phone: "0236 123 4567",
    status: "Chưa kích hoạt",
  },
  {
    id: "#302011",
    name: "Trường Đại học Sư phạm Kỹ thuật",
    address: "12 Nguyễn Văn Linh, Hải Châu, Đà Nẵng",
    email: "dhsupham@daihocdanang.vn",
    phone: "0236 765 4321",
    status: "Đã kích hoạt",
  },
  {
    id: "#302010",
    name: "Bệnh viện Ung Bướu",
    address: "15 Nguyễn Hữu Thọ, Hải Châu, Đà Nẵng",
    email: "benhvien@ungbuou.vn",
    phone: "0236 234 5678",
    status: "Đã kích hoạt",
  },
];

const ITEMS_PER_PAGE = 10;

const LinkedAgencyTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(linkedAgencyData.length / ITEMS_PER_PAGE);
  const paginatedData = linkedAgencyData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Mã đơn vị</th>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>SĐT</th>
            <th style={{ textAlign: "center" }}>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((agency) => (
            <tr key={agency.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td style={{ color: "#2F80ED" }}>{agency.id}</td>
              <td>{agency.name}</td>
              <td>{agency.address}</td>
              <td>{agency.email}</td>
              <td>{agency.phone}</td>
              <td>
                <StatusLinkedAgency status={agency.status} />
              </td>
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

export default LinkedAgencyTable;

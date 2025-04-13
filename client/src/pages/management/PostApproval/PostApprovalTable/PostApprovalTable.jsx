import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination";
import StatusPost from "../../../../components/auth/StatusPost/StatusPost";

const postData = [
  {
    id: "#302012",
    title: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    hospital: "Bệnh viện Đa khoa",
    unit: "Đại học Sư phạm Kỹ thuật",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    status: "Chờ duyệt",
  },
  {
    id: "#302011",
    title: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    hospital: "Bệnh viện Đa khoa",
    unit: "Đại học Sư phạm Kỹ thuật",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    status: "Hủy",
  },
  {
    id: "#302011",
    title: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    hospital: "Bệnh viện Đa khoa",
    unit: "Đại học Sư phạm Kỹ thuật",
    address: "48 Cao Thắng, Hải Châu, Đà Nẵng",
    status: "Đã duyệt",
  },
];

const ITEMS_PER_PAGE = 10;

const PostApprovalTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(postData.length / ITEMS_PER_PAGE);
  const paginatedData = postData.slice(
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
            <th>Mã</th>
            <th>Tiêu đề</th>
            <th>Bệnh viện</th>
            <th>Đơn vị</th>
            <th>Địa chỉ</th>
            <th style={{ textAlign: "center" }}>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((post, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td style={{ color: "#2F80ED" }}>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.hospital}</td>
              <td>{post.unit}</td>
              <td>{post.address}</td>
              <td>
                <StatusPost status={post.status} />
              </td>
              <td className="icon-td">
                <div className="icon-container">
                  <span className="tb-icon">
                    <FaEye />
                  </span>
                  {/* <span className="tb-icon">
                    <LuPencil />
                  </span> */}
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

export default PostApprovalTable;

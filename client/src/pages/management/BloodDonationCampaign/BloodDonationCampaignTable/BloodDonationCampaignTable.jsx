import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination";
import StatusPost from "../../../../components/auth/StatusCampaign/StatusCampaign";

const campaignData = [
  {
    id: "#302012",
    name: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    content: "Bổ sung nguồn máu",
    startDate: "25/1/2025",
    endDate: "26/1/2025",
    status: "Còn hạn",
  },
  {
    id: "#302011",
    name: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    content: "Bổ sung nguồn máu",
    startDate: "25/1/2025",
    endDate: "26/1/2025",
    status: "Còn hạn",
  },
  {
    id: "#302002",
    name: "Hiến máu nhân đạo quý 1 BV Ung Bướu",
    content: "Bổ sung nguồn máu",
    startDate: "25/1/2025",
    endDate: "26/1/2025",
    status: "Hết hạn",
  },
];

const ITEMS_PER_PAGE = 10;

const BloodDonationCampaignTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(campaignData.length / ITEMS_PER_PAGE);
  const paginatedData = campaignData.slice(
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
            <th>Nội dung</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            <th style={{ textAlign: "center" }}>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((campaign, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td style={{ color: "#2F80ED" }}>{campaign.id}</td>
              <td>{campaign.name}</td>
              <td>{campaign.content}</td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
              <td>
                <StatusPost status={campaign.status} />
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

export default BloodDonationCampaignTable;

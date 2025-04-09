import React, { useState } from "react";
import { FaEye, FaRegTrashAlt } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import Pagination from "../../../../components/ui/pagination/Pagination";

const hospitalData = [
  {
    id: "DSK",
    name: "Bệnh viện đa khoa",
    address: "Cao Thắng, Đà Nẵng",
    email: "lamvyyt@gamil.com",
    phone: "012383828981",
  },
  {
    id: "DSK",
    name: "Bệnh viện đa khoa",
    address: "Cao Thắng, Đà Nẵng",
    email: "lamvyyt@gamil.com",
    phone: "012383828981",
  },
  {
    id: "DSK",
    name: "Bệnh viện đa khoa",
    address: "Cao Thắng, Đà Nẵng",
    email: "lamvyyt@gamil.com",
    phone: "012383828981",
  },
];

const ITEMS_PER_PAGE = 10;

const HospitalTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(hospitalData.length / ITEMS_PER_PAGE);
  const paginatedData = hospitalData.slice(
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
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>SĐT</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((hospital, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td style={{ color: "#2F80ED" }}>{hospital.id}</td>
              <td>{hospital.name}</td>
              <td>{hospital.address}</td>
              <td>{hospital.email}</td>
              <td>{hospital.phone}</td>
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

export default HospitalTable;

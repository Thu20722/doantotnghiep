import React, { useState } from "react";
import Sidebar from "../../../../components/management/Sidebar/Sidebar";
import HeaderAD from "../../../../components/auth/Header/Header";
import { FiPlus, FiX } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

const UsersUpdate = () => {
  const [formData, setFormData] = useState({
    userCode: "ND001",
    fullName: "Hoàng Cao Lâm",
    idCard: "01346578866",
    dob: "20/01/2003",
    gender: "Nam",
    phone: "0333662662",
    landline: "",
    email: "hoanglam@gmail.com",
    job: "Sinh viên",
    address: "Cao Thắng, Hải Châu, Đà Nẵng",
    donationCount: "1",
    role: "Người dùng",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    window.history.back();
  };

  const handleUpdate = () => {
    console.log("Dữ liệu cập nhật:", formData);
    alert("Cập nhật thành công!");

    // Điều hướng quay lại trang chi tiết
    navigate(`/management/UsersDetails/${id}`);
  };

  return (
    <div className="users-details">
      <Sidebar />
      <div className="main-mg">
        <HeaderAD />
        <div className="details-container-mg">
          <div className="details-header-mg">
            <h2>Cập nhật thông tin người dùng</h2>
            <div className="details-buttons-mg">
              <button className="cancel-btn-mg" onClick={handleCancel}>
                <FiX />
                Hủy
              </button>
              <button className="update-btn-mg" onClick={handleUpdate}>
                <FiPlus />
                Hoàn thành
              </button>
            </div>
          </div>

          <form className="details-form-mg">
            {[
              { label: "Mã người dùng", name: "userCode", readOnly: true },
              { label: "Tên", name: "fullName" },
              { label: "CMND/CCCD", name: "idCard" },
              { label: "Ngày sinh", name: "dob" },
              { label: "Giới tính", name: "gender" },
              { label: "Số điện thoại", name: "phone" },
              { label: "Số điện thoại bàn (nếu có)", name: "landline" },
              { label: "Email", name: "email", type: "email" },
              { label: "Nghề nghiệp", name: "job" },
              { label: "Địa chỉ", name: "address" },
              { label: "Số lần hiến máu", name: "donationCount" },
            ].map(({ label, name, type = "text", readOnly = false }) => (
              <div className="form-group-mg" key={name}>
                <label>{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  readOnly={readOnly}
                />
              </div>
            ))}

            <div className="form-group-mg">
              <label>Quyền</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option>Người dùng</option>
                <option>Đơn vị liên kết</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UsersUpdate;

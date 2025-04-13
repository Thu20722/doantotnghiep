import React from "react";
import "./UsersDetails.css";
import Sidebar from "../../../../components/management/Sidebar/Sidebar";
import HeaderAD from "../../../../components/auth/Header/Header";
import { FiPlus, FiX } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const handleCancel = () => {
    navigate(`/management/UsersPage`);
  };
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/management/UsersUpdate/${id}`);
  };

  return (
    <div className="users-details">
      <Sidebar />

      <div className="main-mg">
        <HeaderAD />
        <div className="details-container-mg">
          <div className="details-header-mg">
            <h2>Chi tiết người dùng có ID: {id}</h2>
            <div className="details-buttons-mg">
              <button className="cancel-btn-mg" onClick={handleCancel}>
                <FiX />
                Hủy
              </button>
              <button className="update-btn-mg" onClick={handleUpdate}>
                <FiPlus />
                Cập nhật
              </button>
            </div>
          </div>

          <form className="details-form-mg">
            <div className="form-group-mg">
              <label>Mã người dùng</label>
              <input type="text" name="userCode" value="ND001" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Tên</label>
              <input
                type="text"
                name="fullName"
                value="Hoàng Cao Lâm"
                readOnly
              />
            </div>

            <div className="form-group-mg">
              <label>CMND/CCCD</label>
              <input type="text" name="idCard" value="01346578866" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Ngày sinh</label>
              <input type="text" name="dob" value="20/01/2003" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Giới tính</label>
              <input type="text" name="gender" value="Nam" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Số điện thoại</label>
              <input type="text" name="phone" value="0333662662" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Số điện thoại bàn (nếu có)</label>
              <input type="text" name="landline" value="-" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value="hoanglam@gmail.com"
                readOnly
              />
            </div>

            <div className="form-group-mg">
              <label>Nghề nghiệp</label>
              <input type="text" name="job" value="Sinh viên" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Địa chỉ</label>
              <input
                type="text"
                name="address"
                value="Cao Thắng, Hải Châu, Đà Nẵng"
                readOnly
              />
            </div>

            <div className="form-group-mg">
              <label>Số lần hiến máu</label>
              <input type="text" name="donationCount" value="1" readOnly />
            </div>

            <div className="form-group-mg">
              <label>Quyền</label>
              <select name="role" defaultValue="Người dùng" disabled>
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

export default UserDetails;

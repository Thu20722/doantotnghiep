import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClock, FaFileAlt } from "react-icons/fa";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer";
import "./RegistrationFormPage.css";

const RegistrationFormPage = () => {
  const navigate = useNavigate();
  return (
    <div className="registrationform-page">
      <Header />
      <div className="container">
        <h1 className="title">Lịch hẹn của bạn</h1>

        <div className="content-wrapper">
          {/* Sidebar */}
          <div className="sidebar">
            <ul className="menu-list">
              <li className="menu-item">
                <FaClock className="menu-icon" /> Thời gian và địa điểm
              </li>
              <li className="menu-item active">
                <FaFileAlt className="menu-icon" /> Phiếu đăng ký hiến máu
              </li>
            </ul>
          </div>

          {/* Nội dung chính */}
          <div className="main-content">
            <div className="form-register-container">
              <h2>Phiếu đăng ký hiến máu</h2>

              {/* Câu hỏi 1 */}
              <div className="question">
                <p>1. Anh/chị từng hiến máu chưa?</p>
                <label>
                  <input type="radio" name="q1" /> Có
                </label>
                <label>
                  <input type="radio" name="q1" /> Không
                </label>
              </div>

              {/* Câu hỏi 2 */}
              <div className="question">
                <p>2. Hiện tại, anh/chị có mắc bệnh lý nào không?</p>
                <label>
                  <input type="radio" name="q2" /> Có
                </label>
                <label>
                  <input type="radio" name="q2" /> Không
                </label>
              </div>

              {/* Câu hỏi 3 */}
              <div className="question">
                <p>
                  3. Trước đây, anh/chị có từng mắc một trong các bệnh: viêm gan
                  siêu vi B, C, HIV, vảy nến, phì đại tiền liệt tuyến, sốc phản
                  vệ, tai biến mạch máu não, nhồi máu cơ tim, lupus ban đỏ, động
                  kinh, ung thư, hen, được cấy ghép mô tạng?
                </p>
                <label>
                  <input type="radio" name="q3" /> Có
                </label>
                <label>
                  <input type="radio" name="q3" /> Không
                </label>
                <label className="other">
                  <input type="text" placeholder="Bệnh khác" />
                </label>
              </div>

              {/* Câu hỏi 4 */}
              <div className="question">
                <p>4. Trong 12 tháng gần đây, anh/chị có?</p>
                <label>
                  <input type="checkbox" />
                  Khỏi bệnh sau khi mắc một trong các bệnh: sốt rét, giang mai,
                  lao, viêm não-màng não, uốn ván, phẫu thuật ngoại khoa?
                </label>
                <label>
                  <input type="checkbox" /> Được truyền máu hoặc các chế phẩm
                  máu?
                </label>
                <label>
                  <input type="checkbox" /> Tiêm vắc-xin
                </label>
                <label>
                  <input type="checkbox" /> Không
                </label>
              </div>

              {/* Câu hỏi 5 */}
              <div className="question">
                <p>5. Trong 06 tháng gần đây, anh/chị có?</p>
                <label>
                  <input type="checkbox" /> Khởi bệnh sau khi mắc một trong các
                  bệnh: thương hàn, nhiễm trùng máu, bị rắn cắn, viêm tắc động
                  mạch, viêm tắc tĩnh mạch, viêm tuy, viêm tủy xương?
                </label>
                <label>
                  <input type="checkbox" /> Sụt cân nhanh không rõ nguyên nhân
                </label>
                <label>
                  <input type="checkbox" /> Nỗi hạch kéo dài?
                </label>
                <label>
                  <input type="checkbox" /> Thực hiện thủ thuật y tế xâm lấn
                  (chữa răng, châm cứu, lán kim, nội soi...)?
                </label>
                <label>
                  <input type="checkbox" /> Xăm, xỏ lỗ tai, lỗ mũi hoặc các vị
                  trí khác trên cơ thể?
                </label>
                <label>
                  <input type="checkbox" /> Sử dụng ma túy
                </label>
                <label>
                  <input type="checkbox" /> Tiếp xúc trực tiếp với máu, dịch
                  tiết của người khác hoặc bị thương bởi kim tiêm?
                </label>
                <label>
                  <input type="checkbox" />
                  Sinh sống chung với người nhiễm bệnh Viêm gan siêu vi B?
                </label>
                <label>
                  <input type="checkbox" />
                  Quan hệ tình dục với người nhiễm viêm gan siêu vi B, C, HIV,
                  giang mai hoặc người có nguy cơ nhiễm viêm gan siêu vi B, C,
                  HIV, giang mai?
                </label>
                <label>
                  <input type="checkbox" />
                  Quan hệ tình dục với người cùng giới?
                </label>
                <label>
                  <input type="checkbox" /> Không
                </label>
              </div>

              {/* Câu hỏi 6 */}
              <div className="question">
                <p>6. Trong 01 tháng gần đây, anh/chị có?</p>
                <label>
                  <input type="checkbox" />
                  Khởi bệnh sau khi mắc bệnh viêm đường tiết niệu, viêm da nhiễm
                  trùng, viêm phế quản, viêm phổi, sởi, ho gà, quai bị, sốt xuất
                  huyết, ký sinh trùng, Rubella?
                </label>
                <label>
                  <input type="checkbox" /> Đi vào vùng có dịch bệnh lưu hành
                  (sốt rét, sốt xuất huyết, Zika...)?
                </label>
                <label>
                  <input type="checkbox" /> Không
                </label>
              </div>

              {/* Câu hỏi 7 */}
              <div className="question">
                <p>7. Trong 14 ngày gần đây, anh/chị có?</p>
                <label>
                  <input type="checkbox" />
                  Bị cúm, cảm lạnh, ho, nhức đầu, sốt, đau họng?
                </label>
                <label>
                  <input type="checkbox" /> Không
                </label>
                <label className="other">
                  <input type="text" placeholder="Khác" />
                </label>
              </div>

              {/* Câu hỏi 8 */}
              <div className="question">
                <p>8. Trong 07 ngày gần đây, anh/chị có?</p>
                <label>
                  <input type="checkbox" /> Dùng thuốc kháng sinh, kháng viêm,
                  Aspirin, Corticoid?
                </label>
                <label>
                  <input type="checkbox" /> Không
                </label>
                <label className="other">
                  <input type="text" placeholder="Khác" />
                </label>
              </div>

              {/* Câu hỏi 9 */}
              <div className="question">
                <p>9. Câu hỏi dành cho phụ nữ:</p>
                <label>
                  <input type="checkbox" />
                  Hiện chị đang mang thai hoặc nuôi con dưới 12 tháng tuổi?
                </label>
                <label>
                  <input type="checkbox" />
                  Chấm dứt thai kỳ trong 12 tháng gần đây (sảy thai, phá thai,
                  thai ngoài tử cung)?
                </label>
                <label>
                  <input type="checkbox" /> Không
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Nút điều hướng */}
        <div className="continue-button-wrapper">
          <button
            onClick={() => navigate("/users/BookPage")}
            className="btn-back">
            QUAY LẠI
          </button>
          <button
            onClick={() => navigate("/users/RegitrationResultsPage")}
            className="btn-continue">
            TIẾP TỤC
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegistrationFormPage;

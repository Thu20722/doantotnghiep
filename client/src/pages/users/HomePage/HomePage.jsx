import React from "react";
import Header from "../../../components/users/Header/Header";
import Footer from "../../../components/users/Footer/Footer"
import BannerImage from "../../../assets/image/GT.svg";
import AfterBloodDonationImage from "../../../assets/image/sauHM.svg";
import BeforeBloodDonationImage from "../../../assets/image/truocHM.svg";
import { Button, HStack } from "@chakra-ui/react";
import {
  RiArrowRightLine,
  RiSearchLine,
  RiEyeLine,
  RiMapPinLine,
  RiFirstAidKitLine,
  RiUserLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import "./HomePage.css";
import CustomDatePicker from "../../../components/ui/react_datepicker";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Tìm kiếm",
    description:
      "Tại màn hình trang chủ, đặt Lịch hiến máu cứu người. Chọn thời gian bạn cần đặt lịch để tham gia hiến máu",
    icon: <RiSearchLine />,
  },
  {
    id: 2,
    title: "Đặt lịch hiến máu",
    description:
      "Người hiến máu xem và nhấn nút 'Đặt lịch' trên sự kiện mình dự định tham gia",
    icon: <RiEyeLine />,
  },
  {
    id: 3,
    title: "Khai báo thông tin thời gian & địa điểm",
    description:
      "Người hiến máu khai báo các thông tin cần thiết trước khi hiến máu",
    icon: <RiMapPinLine />,
  },
  {
    id: 4,
    title: "Khai báo y tế",
    description:
      "Trả lời đầy đủ, chính xác các thông tin về tình trạng sức khỏe cá nhân",
    icon: <RiFirstAidKitLine />,
  },
  {
    id: 5,
    title: "Khai báo các thông tin cá nhân",
    description:
      "Khai báo và bổ sung các thông tin cần thiết về thông tin cá nhân của người hiến máu",
    icon: <RiUserLine />,
  },
  {
    id: 6,
    title: "Checkin và thực hiện quy trình hiến máu",
    description: "Vào ngày hiến máu đến địa điểm và thực hiện theo yêu cầu",
    icon: <RiCheckboxCircleLine />,
  },
];

const benefits = [
  {
    id_1: 1,
    title_1: "Được cấp Giấy chứng nhận hiến máu tình nguyện",
    description_1: [
      "1. Giấy chứng nhận được trao cho người hiến máu sau mỗi lần hiến máu tình nguyện.",
      "2. Có giá trị để được truyền máu miễn phí bằng số lượng máu đã hiến tại tất cả các cơ sở y tế công lập trên toàn quốc.",
      "3. Người hiến máu cần xuất trình Giấy chứng nhận để làm cơ sở cho các cơ sở y tế thực hiện việc truyền máu miễn phí.",
      "4. Cơ sở y tế có trách nhiệm ký, đóng dấu, xác nhận số lượng máu đã truyền miễn phí cho người hiến máu vào giấy chứng nhận.",
    ],
  },
  {
    id_1: 2,
    title_1: "Được tư vấn về sức khỏe",
    description_1: [
      "- Được giải thích về quy trình hiến máu và các tai biến có thể xảy ra trong và sau khi hiến máu.",
      "- Được cung cấp thông tin về dấu hiệu, triệu chứng của các bệnh lây qua đường truyền máu, tình dục như HIV, viêm gan, giang mai.",
      "- Được xét nghiệm sàng lọc một số virus lây qua đường truyền máu (HIV, viêm gan, giang mai, ...).",
      "- Được tư vấn về cách chăm sóc sức khỏe và hướng dẫn khi có kết quả xét nghiệm bất thường.",
      "- Kết quả khám lâm sàng và xét nghiệm được bảo mật tuyệt đối.",
    ],
  },
  {
    id_1: 3,
    title_1: "Được bồi dưỡng trực tiếp",
    description_1: [
      "Ăn nhẹ, nước uống tại chỗ: tương đương 30.000 đồng (1 chai trà xanh không độ, 1 hộp chocopie, 1 hộp bánh Goute).",
      "Hỗ trợ chi phí đi lại (bằng tiền mặt): 50.000 đồng.",
      "Nhận phần quà tặng giá trị tương đương:",
      "- 100.000 đồng khi hiến máu 250ml;",
      "- 150.000 đồng khi hiến máu 350ml;",
      "- 180.000 đồng khi hiến máu 450ml"
    ],
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      {/* Banner và tìm kiếm */}
      <div className="banner_search_wrapper">
        <div className="banner">
          <img src={BannerImage} alt="GT" className="banner_img" />
          <div className="group_btn_1">
            <HStack>
              <Button className="btn_book">Đặt lịch ngay</Button>
              <Button className="btn_learn_more">
                Quy trình hiến máu <RiArrowRightLine />
              </Button>
            </HStack>
          </div>
        </div>

        {/* Ô tìm kiếm */}
        <div className="search_container">
          <div className="search_content">
            <span className="search_title">
              Bạn cần tìm kiếm lịch hiến máu vào thời gian nào?
            </span>
            <CustomDatePicker className="search_input_container" />
          </div>
          <Button className="search_button" onClick={() => {
                  navigate("/users/SearchPage");
                }}>Tìm kiếm</Button>
        </div>
      </div>

      {/* Quy trình thực hiện */}
      <div className="process_container">
        <h2 className="process_title">Quy trình thực hiện</h2>
        <div className="process_grid">
          {steps.map((step) => (
            <div key={step.id} className="process_card">
              <div className="process_icon">{step.icon}</div>
              <h3>
                {step.id}. {step.title}
              </h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lưu ý trước và sau hiến máu */}
      <div className="notes_before_donating_blood">
        <img
          src={BeforeBloodDonationImage}
          alt="before"
          className="before_img"
        />
      </div>
      <div className="notes_after_donating_blood">
        <img src={AfterBloodDonationImage} alt="after" className="after_img" />
      </div>

      <div className="benefit-container">
        <div className="benefit-background">
          <h2 className="benefit-title">Quyền lợi của người hiến máu</h2>
        </div>

        <div className="benefit-slider-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="benefit-slider">
            {benefits.map((benefit) => (
              <SwiperSlide key={benefit.id_1} className="benefit-slide">
                <div className="benefit-card">
                  <h3>{benefit.title_1}</h3>
                  <ul>
                    {benefit.description_1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

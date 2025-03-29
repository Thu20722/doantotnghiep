import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Input, Icon } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./style.css";

// Custom Input cho DatePicker
const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <Box
    position="relative"
    width="100%"
    border="1px solid #6E8EFF"
    borderRadius="12px"
    padding="2px 10px"
    _focusWithin={{
      boxShadow: "0px 1px 10px rgba(47, 128, 237, 0.2)",
      borderColor: "#2F80ED",
    }}>
    <Input
      value={value}
      onClick={onClick}
      readOnly
      ref={ref}
      placeholder="Chọn khoảng thời gian"
      pr="3rem"
      border="none"
      fontSize="16px"
      fontFamily="Inter, sans-serif"
      color="#000"
      width = "700px"
      _hover={{ borderColor: "#2F80ED" }}
      _placeholder={{ color: "#000", fontWeight: "normal", fontSize: "14px" }}
    />
    <Icon
      as={FaRegCalendarAlt}
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      color="black"
      cursor="pointer"
      onClick={onClick}
    />
  </Box>
));

const CustomDateRangePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <Box>
      <DatePicker
        selected={startDate}
        onChange={(update) => setDateRange(update)}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="dd/MM/yyyy"
        customInput={<CustomInput />}
      />
    </Box>
  );
};

export default CustomDateRangePicker;

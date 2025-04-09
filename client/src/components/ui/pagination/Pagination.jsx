// Pagination.js
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import './Pagination.css';


const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="pagination">
      <ButtonGroup spacing="2">
        <Button
          isDisabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Trước
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "solid" : "outline"}
            onClick={() => setCurrentPage(index + 1)}
            aria-pressed={currentPage === index + 1}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          isDisabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Tiếp theo
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;

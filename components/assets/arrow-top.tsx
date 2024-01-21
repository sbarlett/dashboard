import React from "react";
import { ArrowProps } from '../../utils/types';



const ArrowTop = ({ onClick }: ArrowProps) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M16.375 9.00002L12.495 12.88L8.61498 9.00002C8.22498 8.61002 7.59498 8.61002 7.20498 9.00002C6.81498 9.39002 6.81498 10.02 7.20498 10.41L11.795 15C12.185 15.39 12.815 15.39 13.205 15L17.795 10.41C18.185 10.02 18.185 9.39002 17.795 9.00002C17.405 8.62002 16.765 8.61002 16.375 9.00002Z"
        fill="black"
      />
    </svg>
  );
};

export default ArrowTop;

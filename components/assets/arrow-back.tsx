import React from "react";
import { ArrowProps } from '../../utils/types';


const ArrowBack = ({ onClick }: ArrowProps) => {
return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ cursor: "pointer" }}
      data-testid="icon-arrow-sidebar"
    >
      <path
        d="M21.0151 17.002C21.5051 16.512 21.5051 15.722 21.0151 15.232L12.7051 6.92196C12.3151 6.53196 11.6851 6.53196 11.2951 6.92196L2.98507 15.232C2.49507 15.722 2.49507 16.512 2.98507 17.002C3.47507 17.492 4.26507 17.492 4.75507 17.002L12.0051 9.76196L19.2551 17.012C19.7351 17.492 20.5351 17.492 21.0151 17.002Z"
        fill="black"
      />
    </svg>
  );
};

export default ArrowBack;

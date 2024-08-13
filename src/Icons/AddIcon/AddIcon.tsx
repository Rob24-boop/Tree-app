import { FC } from "react";
import { IIconProp } from "../../types/types";

const AddIcon: FC<IIconProp> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
    >
      <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
      <path
        d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default AddIcon;

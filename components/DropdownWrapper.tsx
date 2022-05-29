import React from "react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "../interfaces/IndexProps";

const DropdownWrapper = ({
  dropdown,
  setDropdown,
  setDropDownValue,
  dropDownValue,
  cities,
}: DropdownProps) => {
  return (
    <>
      <div className="flex">
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          setDropDownValue={setDropDownValue}
          dropDownValue={dropDownValue}
          cities={cities}
        />
      </div>
    </>
  );
};

export default DropdownWrapper;

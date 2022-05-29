import React from "react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "../interfaces/IndexProps";

const DropdownWrapper = ({
  dropdown,
  setDropdown,
  setDropDownValue,
  dropDownValue,
  cities,
  states,
  stateValue,
  setStateValue,
  citiDropdown,
  setCitiDropdown,
}: DropdownProps) => {
  return (
    <>
      <div className="flex max-h-40">
        <Dropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          setDropDownValue={setDropDownValue}
          dropDownValue={dropDownValue}
          cities={cities}
          value="City"
        />
        <Dropdown
          dropdown={citiDropdown}
          setDropdown={setCitiDropdown}
          setDropDownValue={setStateValue}
          dropDownValue={stateValue}
          cities={states}
          value="State"
        />
      </div>
    </>
  );
};

export default DropdownWrapper;

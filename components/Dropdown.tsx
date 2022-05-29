import React from "react";
import { DropdownProps } from "../interfaces/IndexProps";

const Dropdown = ({
  dropdown,
  setDropdown,
  setDropDownValue,
  dropDownValue,
  cities,
  value,
}: DropdownProps) => {
  return (
    <div className="max-h-40">
      <label
        onClick={() => setDropdown!!(!dropdown)}
        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        htmlFor="dropdown"
      >
        {dropDownValue ? dropDownValue : `Select a ${value}`}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </label>
      <div
        id="dropdown"
        onClick={() => setDropdown!!(!dropdown)}
        className={`${
          dropdown ? "absolute" : "hidden"
        } bg-gray-900 bg-opacity-50 rounded shadow w-44 dark:bg-gray-700`}
      >
        <ul className="py-1 max-h-60 overflow-scroll text-sm text-white">
          {cities?.map((city, index) => (
            <li
              key={index}
              className="py-1 cursor-pointer px-3 hover:bg-gray-700 dark:hover:bg-gray-800 dark:bg-opacity-50"
              onClick={() => {
                setDropDownValue!!(city);
                setDropdown!!(false);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

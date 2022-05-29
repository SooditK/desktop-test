import React from "react";
import { DropdownProps } from "../interfaces/IndexProps";

const Dropdown = ({
  dropdown,
  setDropdown,
  setDropDownValue,
  dropDownValue,
  cities,
}: DropdownProps) => {
  return (
    <>
      <label
        onClick={() => setDropdown(!dropdown)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        htmlFor="dropdown"
      >
        {dropDownValue ? dropDownValue : "Select a City"}
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
        className={`${
          dropdown ? "block absolute" : "hidden"
        } bg-gray-900 bg-opacity-50  divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {cities?.map((city, index) => (
            <li
              key={index}
              className="py-1 cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-800 dark:bg-opacity-50"
              onClick={() => {
                setDropDownValue(city);
                setDropdown(false);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;

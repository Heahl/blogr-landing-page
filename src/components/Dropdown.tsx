import React from "react";

interface DropdownProps {
  isOpen: boolean;
  title: string;
  items: string[];
  arrowSrc: string;
  isMobile: boolean;
  titleClassNames?: string;
  ulClassNames?: string;
  toggleDropdown?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  title,
  items,
  arrowSrc,
  titleClassNames,
  ulClassNames,
  isMobile,
  toggleDropdown,
}) => {
  return (
    <div className="dropdown z-20 flex flex-col items-center justify-center gap-6">
      <button
        className={
          isMobile
            ? `flex items-center justify-center gap-4 text-2xl ${titleClassNames}`
            : `flex items-center justify-center gap-4 text-xl ${titleClassNames}`
        }
        onClick={toggleDropdown}
      >
        {title}
        <img
          className="h-3 w-auto"
          src={arrowSrc}
          alt="Toggle dropdown"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {isOpen && (
        <ul
          className={
            isMobile
              ? `bg-footer-text/50 text-body-copy flex w-[90%] flex-col gap-4 rounded-lg py-6 text-center text-xl ${ulClassNames}`
              : `text-very-dark-desaturated-blue absolute top-40 z-40 flex translate-x-4 flex-col gap-4 rounded-lg bg-white py-6 pl-10 pr-20 text-left text-xl ${ulClassNames}`
          }
        >
          {items.map((item, index) => (
            <li
              className={
                isMobile ? "hover:cursor-pointer hover:font-medium" : ""
              }
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

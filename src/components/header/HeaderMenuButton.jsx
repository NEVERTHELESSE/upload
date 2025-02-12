import React from "react";
import { FiAlignJustify } from "react-icons/fi";

export default function HeaderMenuButton({ setShowMenu }) {
  function showMenu() {
    setShowMenu(true);
  }

  return (
    <div className="flex items-center mx-2" onClick={showMenu}>
      <FiAlignJustify
        size={40}
        color="black"
        className="border mx-2 cursor-pointer rounded-full p-2"
        id="menu"
      />
      <label htmlFor="menu" className="hidden fsc:flex">
        MENU
      </label>
    </div>
  );
}

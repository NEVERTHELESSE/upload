import { Link } from "react-router-dom";
import { navigation } from "./navigation";
import { useRef } from "react";
import "../../css/header.css";

export default function HeaderMenu({ setShowMenu }) {
  const menuRef = useRef(null);
  function cancel() {
    menuRef.current.classList.add("hide");
    setTimeout(() => {
      setShowMenu(false);
    }, 300);
  }

  const location = window.location.pathname.split("/")[1];
  return (
    <div>
      {
        <div className="cover fixed flex  z-[100] h-[100vh]">
          <div
            className=" duration-500 bg-white h-full menu  shadow border"
            ref={menuRef}
          >
            <Link
              to="/"
              className="text-center sm:text-3xl md:text-6xl  text-tertiaryColor font-bold "
            >
              Ivychickaftan
            </Link>
            <div className="flex flex-col ">
              {navigation.map((navigate) => (
                <Link
                  onClick={cancel}
                  key={navigate.id}
                  to={navigate.link}
                  className={`sm:text-2xl uppercase flex items-center hover:bg-primaryColor duration-500  border-b p-4 ${
                    navigate.active == location &&
                    "bg-primaryColor text-white font-bold"
                  }`}
                >
                  <navigate.icon />
                  <p className="ml-3">{navigate.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full h-full " onClick={cancel}></div>
        </div>
      }
    </div>
  );
}

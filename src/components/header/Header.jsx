import { Suspense, lazy, useState } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenuButton from "./HeaderMenuButton";
import LoadingSpinner from "../../loading/loading";

const HeaderMenu = lazy(() => import("./HeaderMenu"));
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {showMenu && (
        <Suspense fallback={LoadingSpinner}>
          <HeaderMenu setShowMenu={setShowMenu} />
        </Suspense>
      )}
      <header className="w-[100vw] py-2 z-50 shadow fixed flex text-black justify-between items-center fsc:px-4 bg-white ">
        <HeaderLogo />
        <HeaderMenuButton setShowMenu={setShowMenu} />
      </header>
    </div>
  );
}

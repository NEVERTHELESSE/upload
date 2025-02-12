import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to="/" className="hidden sm:flex border-r">
      <img
        src="/logo/kaftan.jpg"
        alt="logo"
        className="object-cover w-[10rem] h-[4rem]"
      />
    </Link>
  );
}

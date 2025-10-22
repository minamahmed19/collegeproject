import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo.png"
        alt=""
        className="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain"
      
      />
    </Link>
  );
};

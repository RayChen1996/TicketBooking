import logoSvg from "../../../../public/Logo.svg";
import logoMSvg from "../../../../public/LogoM.svg";
import searchSvg from "../../../../public/search-1.svg";
import registerSvg from "../../../../public/register.svg";
import useSvg from "../../../../public/login.svg";
import menuSvg from "../../../../public/menu.svg";
import { Link } from "react-router-dom";
export default function AppNav() {
  return (
    <header className=" sticky top-0  z-20 backdrop-blur-2xl">
      <div className="flex justify-around py-2 items-center">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img src={logoSvg} alt="" className=" hidden md:block" />
            <img src={logoMSvg} alt="" className=" md:hidden" />
          </Link>

          <label className="flex items-center" htmlFor="search">
            <input
              type="search"
              name=""
              placeholder="探索活動"
              className=" input input-md rounded-none  border-primary input-primary input-bordered"
              id="search"
            />
            <button className="btn bg-primary rounded-none">
              <img src={searchSvg} alt="" />
            </button>
          </label>
        </div>
        <div className="  items-center gap-3 hidden md:flex">
          <span className="flex">
            <img src={registerSvg} alt="" />
            <label htmlFor="">REGISTER</label>
          </span>

          <Link to={"/sign-in"}>
            <span className="flex">
              <img src={useSvg} alt="" />
              <label htmlFor="">LOGIN</label>
            </span>
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <span className="flex border border-primary rounded-md p-2">
            <img src={menuSvg} alt="" />
          </span>
        </div>
      </div>
      <div className=" h-1 bg-black"></div>
    </header>
  );
}

import img from "../../assets/images/header/img.svg";
import svg1 from "../../assets/images/header/svg_1.svg";
import svg2 from "../../assets/images/header/svg_2.svg";
import svg3 from "../../assets/images/header/Mask group.svg";
import svg4 from "../../assets/images/header/svg_3.svg";
import menu from "../../assets/images/header/menu.svg";
import svg5 from "../../assets/images/header/svg_4.svg";
import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img src={img} alt="" className="w-[100vw] relative" />
          <img
            src={svg1}
            alt="vector"
            className="absolute right-0 bottom-0 w-[93%] z-[10]"
          />
          <img
            src={svg2}
            alt="vector"
            className="absolute right-0 bottom-0 z-[20] w-[100%]  "
          />
          <img
            src={svg3}
            alt="v"
            className="absolute right-0 bottom-0 z-[20] w-[89.5%] "
          />
          <img
            src={svg4}
            alt="v"
            className="absolute left-0 bottom-0 z-[20] w-[100%] "
          />
          <div className="absolute w-[100vw] h-[11.66667rem]  top-8 z-[50]">
            <div className="container flex  justify-between ">
              <img src={logo} alt="" />
              <div className="flex items-center gap-[1rem]">
                <button className="w-[6.1rem] h-[3rem] py-[0.46875rem] pl-[0.36458rem] pr-[0.3125rem] border-[rgba(255,255,255,0.3)] rounded-[1.30208rem] bg-[rgba(35,31,32,0.13)] text-primary  flex items-center gap-[0.57rem] ">
                  <img src={svg5} alt="" />
                  <span className="font-semibold">ENG</span>
                </button>
                <button className=" py-[0.72917rem] px-[1.61458rem]  flex items-center gap-[0.41667rem] border-[rgba(255,255,255,0.3)] rounded-[1.30208rem]  bg-[rgba(35,31,32,0.13)] text-primary font-bold">
                  MENU
                  <img src={menu} alt="menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

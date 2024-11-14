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
      <div className="">
        <div className="relative sm:h-[auto] h-[40rem]">
          {/* mt */}
          <div className="hidden sm:block">
            <img src={img} alt="" className="md:w-[100vw] " />
            <img
              src={svg1}
              alt="vector"
              className="absolute right-0 bottom-0 md:w-[93%] z-[10]"
            />
            <img
              src={svg2}
              alt="vector"
              className="absolute right-0 bottom-0 z-[20] md:w-[100%]  "
            />
            <img
              src={svg3}
              alt="v"
              className="absolute right-0 bottom-0 z-[20] md:w-[89.5%] "
            />
            <img
              src={svg4}
              alt="v"
              className="absolute left-0 bottom-0 z-[20] md:w-[100%] "
            />
          </div>
          {/* mb */}
          <div className="absolute z-[10] h-[40rem] sm:hidden w-full">
            <img
              src={img}
              alt=""
              className="absolute bottom-0 left-[-41%] transform -translate-y-1/[33%] z-[20]   "
              style={{ transform: "scale(3) translateY(-33%)" }}
            />
            <img
              src={svg1}
              alt="vector"
              className="absolute bottom-[20%] left-[-20%] transform -translate-y-1/[33%] z-[20] w-[1000px]  "
              style={{ transform: "scale(1.5) translateY(-33%)" }}
            />
            <img
              src={svg2}
              alt="vector"
              className="absolute bottom-0 left-[-41%] transform -translate-y-1/[33%] z-[20] w-[1000px]  "
              style={{ transform: "scale(3) translateY(-33%)" }}
            />
            <img
              src={svg4}
              alt="v"
              className="absolute bottom-0 left-[-41%] transform -translate-y-1/[33%] z-[20] w-[1000px]  "
              style={{ transform: "scale(3) translateY(-33%)" }}
            />
          </div>
          <div className="sm:hidden  flex w-full items-center absolute bottom-[5%] z-[33] justify-center">
            <span className="font-sans text-[2rem] font-bold text-white leading-[120%] uppercase">
              Đồng hành <div>khởi thịnh vượng!</div>
            </span>
          </div>

          <div className="absolute w-[100vw] h-[11.66667rem] md:pt-[1.8rem] pt-[0.8rem] 2xl:top-[3rem] lg:top-[2rem] md:top-[1rem] top-[0.1rem] z-[50]">
            <div className="container flex  justify-between ">
              <img src={logo} alt="" className="md:w-[20%] w-[5rem] " />
              <div className="flex items-center gap-[1rem] relative lg:top-[-40px]">
                <button className="w-[6.1rem] h-[3rem] py-[0.46875rem] pl-[0.36458rem] pr-[0.3125rem] border-[rgba(255,255,255,0.3)] rounded-[1.30208rem] bg-[rgba(35,31,32,0.13)] text-primary font-bold flex items-center gap-[0.57rem] ">
                  <img src={svg5} alt="" />
                  <span className="font-">ENG</span>
                </button>
                <button className=" lg:py-[0.72917rem] lg:px-[1.61458rem] px-[1rem] py-[1.1rem]  flex items-center gap-[0.41667rem] border-[rgba(255,255,255,0.3)] lg:rounded-[1.30208rem] rounded-full md:bg-[rgba(35,31,32,0.13)] bg-white lg:text-primary font-bold">
                  <span className="lg:block hidden">MENU</span>
                  <img src={menu} alt="menu" className="text-black" />
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

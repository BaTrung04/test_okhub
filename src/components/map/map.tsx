import map from "../../assets/images/map/img.png";
import svgDot from "../../assets/images/map/svg_dot.svg";
const Map = () => {
  return (
    <div className="w-[100vw] sm:h-auto h-[40rem] relative ">
      <div className="hidden sm:block">
        <div className=" container w-[100vw] flex  justify-center">
          <img src={map} alt="" className="w-[85%]" />
        </div>
      </div>
      <div className="absolute z-[10] h-[40rem] sm:hidden w-full">
        <img
          src={map}
          alt=""
          className="absolute bottom-0 left-0 transform -translate-y-1/[33%] z-[20]   "
          style={{ transform: "scale(3) translateY(-33%)" }}
        />
      </div>
      <div className="absolute top-[35%] inset-0 m-auto">
        <div className="flex items-center justify-center sm:gap-[0.58rem] gap-[rem]">
          <img src={svgDot} alt="dot" />
          <span className="font-Inter text-[1.3rem text-[#165BB8] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem]  uppercase">
            {" "}
            tầm nhìn
          </span>
          <img src={svgDot} alt="dot" />
        </div>
        <div className="flex items-center justify-center">
          <div className="lg:w-[62.05208rem] md:w-[47rem] sm:w-[33rem] w-[70vw] text-center lg:text-14 md:text-[2.2rem] sm:text-[1.5rem] text-[1.4rem] font-extrabold">
            Ami&M xây dựng{" "}
            <span className="text-transparent bg-clip-text bg-text-gradient">
              hệ sinh thái đa ngành phát triển nhanh và bền vững
            </span>{" "}
            trên hành trình kiến tạo sự thịnh vượng đích thực!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

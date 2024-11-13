import map from "../../assets/images/map/img.png";
import svgDot from "../../assets/images/map/svg_dot.svg";
const Map = () => {
  return (
    <div className="w-[100vw] relative">
      <div className=" container w-[100vw] flex  justify-center">
        <img src={map} alt="" className="w-[85%]" />
      </div>
      <div className="absolute top-[35%] inset-0 m-auto">
        <div className="flex items-center justify-center gap-[0.58rem]">
          <img src={svgDot} alt="dot" />
          <span className="font-Inter text-[1.3rem text-[#165BB8] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
            {" "}
            tầm nhìn
          </span>
          <img src={svgDot} alt="dot" />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[62.05208rem] text-center text-14 font-extrabold">
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

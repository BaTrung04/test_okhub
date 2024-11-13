import svgDot from "../../assets/images/map/svg_dot.svg";
import svg1 from "../../assets/images/mission/svg_1.svg";
import svg2 from "../../assets/images/mission/svg_2.png";
import svg3 from "../../assets/images/mission/svg_3.svg";
import svg4 from "../../assets/images/mission/svg_4.svg";
import svg5 from "../../assets/images/mission/svg_5.svg";
import svg6 from "../../assets/images/mission/svg_6.svg";
import img from "../../assets/images/mission/img_2.png";

const Mission = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <img
          src={img}
          alt=""
          className="z-[10] absolute right-[5%] top-[23%]"
        />
        <div className="w-[110vw] h-[25.76042rem] rounded-[50%] bg-bg-gradient relative mt-[2.3rem]">
          <div className="absolute top-[45%] inset-0 m-auto">
            <div className="flex items-center justify-center gap-[0.58rem]">
              <img src={svgDot} alt="dot" />
              <span className="font-Inter text-[1.3rem text-[#165BB8] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
                sứ mệnh
              </span>
              <img src={svgDot} alt="dot" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[55.05208rem] text-14 font-extrabold flex flex-col items-center justify-center ">
                <span className="text-transparent bg-clip-text bg-text-gradient">
                  Mang lại cuộc sống tốt đẹp hơn
                </span>
                <div className="text-transparent bg-clip-text bg-text-gradient">
                  cho những người đồng hành
                </div>
              </div>
            </div>
          </div>
          <img
            src={svg5}
            alt=""
            className="absolute z-10 top-[15%] left-[4%]"
          />
        </div>
        {/* card_1 */}
        <div className=" bg-white">
          <div className="w-[100vw] max-h-[23rem] pl-[15rem] pt-[4.43rem] pb-[4.13rem] pr-[80rem] flex flex-col gap-[0.57rem] ">
            <img src={svg1} alt="" className="w-[6rem]" />
            <div className="text-[1.8rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
              với cán bộ nhân viên
            </div>
            <div className="text-13 font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
              Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá,
              phát triển, khẳng định giá trị bản thân
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="bg-white relative">
          <div className="w-[100vw] max-h-[23rem] pl-[15rem] pt-[4.43rem] pb-[4.13rem] pr-[80rem] flex flex-col gap-[0.57rem] ">
            <img src={svg2} alt="" className="w-[6rem]" />
            <div className="text-[1.8rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
              với cán bộ nhân viên
            </div>
            <div className="text-13 font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
              Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá,
              phát triển, khẳng định giá trị bản thân
            </div>
          </div>
          <img
            src={svg6}
            alt=""
            className="absolute z-10 top-[50%] right-[4%]"
          />
        </div>
        {/* card3 */}
        <div className="bg-white">
          <div className="w-[100vw] max-h-[23rem] pl-[15rem] pt-[4.43rem] pb-[4.13rem] pr-[80rem] flex flex-col gap-[0.57rem] ">
            <img src={svg3} alt="" className="w-[6rem]" />
            <div className="text-[1.8rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
              với cán bộ nhân viên
            </div>
            <div className="text-13 font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
              Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá,
              phát triển, khẳng định giá trị bản thân
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className=" bg-bg-card-gradient relative">
          <div className="w-[100vw] max-h-[23rem] pl-[15rem] pt-[4.43rem] pb-[4.13rem] pr-[80rem] flex flex-col gap-[0.57rem] ">
            <img src={svg4} alt="" className="w-[6rem]" />
            <div className="text-[1.8rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
              với cán bộ nhân viên
            </div>
            <div className="text-13 font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
              Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá,
              phát triển, khẳng định giá trị bản thân
            </div>
          </div>
          <img
            src={svg5}
            alt=""
            className="absolute z-10 bottom-[-100%] left-0"
          />
        </div>
      </div>
    </>
  );
};

export default Mission;

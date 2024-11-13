import img from "../../assets/images/field/img.png";
import img2 from "../../assets/images/field/img_2.png";
import img3 from "../../assets/images/field/img_3.png";
import img4 from "../../assets/images/field/img_4.png";
import img5 from "../../assets/images/field/img_5.png";
import img6 from "../../assets/images/field/img_6.png";
import img7 from "../../assets/images/field/Mask group.png";
import img8 from "../../assets/images/field/img_8.png";
import img10 from "../../assets/images/field/img_10.png";
import svgDot from "../../assets/images/map/svg_dot.svg";

const Field = () => {
  return (
    <>
      <div className="relative ">
        <img src={img} alt="img" />
        <img src={img2} alt="img" className="absolute bottom-0" />
        <img src={img3} alt="img" className="absolute bottom-0 left-[3rem]" />
        <img src={img4} alt="img" className="absolute bottom-0 left-[3rem]" />
        <img src={img5} alt="img" className="absolute top-0 right-0 z-[10]" />
        <img src={img7} alt="img" className="absolute top-0 right-0" />
        <div className="absolute top-0 right-[1%]  z-[20]">
          <img src={img6} alt="img" className=" " />
          <div className="absolute top-[10%] left-[-5%] z-[22]  w-[8rem] h-[8rem] rounded-full bg-[#3E4089] flex items-center justify-center shadow-md ">
            <img src={img10} alt="img" />
          </div>

          <div className="absolute top-[34%] left-[-10%] z-[22]  w-[8rem] h-[8rem] rounded-full bg-white flex items-center justify-center shadow-md">
            <img src={img8} alt="img" />
          </div>
          <div className="absolute top-[58%] left-[-2%] z-[22]  w-[8rem] h-[8rem] rounded-full bg-white flex items-center justify-center shadow-md">
            <img src={img8} alt="img" />
          </div>
          <div className="absolute top-[79%] left-[15%] z-[22]  w-[8rem] h-[8rem] rounded-full bg-white flex items-center justify-center shadow-md">
            <img src={img8} alt="img" />
          </div>
          <div className="absolute top-[90%] left-[46%] z-[22]  w-[8rem] h-[8rem] rounded-full bg-white flex items-center justify-center shadow-md">
            <img src={img8} alt="img" />
          </div>
        </div>

        <div className="container absolute left-[4%] top-[13%] flex flex-col gap-[0.7rem]">
          <div className="flex items-center  gap-[0.58rem]">
            <img src={svgDot} alt="dot" />
            <span className="font-Inter text-[1.3rem text-[#165BB8] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
              LĨNH VỰC ĐẦU TƯ
            </span>
          </div>
          <div className="w-[55.05208rem] font-sans text-[1.8rem] font-bold leading-[120%] tracking-[-0.06667rem]">
            <span className="text-transparent bg-clip-text bg-text-gradient">
              Ami&M là đối tác tư vấn - đầu tư bền
            </span>
            <div className="text-transparent bg-clip-text bg-text-gradient">
              vững, phát triển dịch vụ cao cấp và
            </div>
            <div className="text-transparent bg-clip-text bg-text-gradient">
              nâng tầm giáo dục trải nghiệm.
            </div>
          </div>
          <div className="font-Inter text-13 font-medium leading-[150%] tracking-[-0.01875rem] max-w-[29rem] ">
            Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
            vượng đích thực cho những Người đồng hành và tạo lập di sản xứng tầm
            cho thế hệ tương lai.
          </div>
        </div>
      </div>
    </>
  );
};

export default Field;

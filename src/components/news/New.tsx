import img from "../../assets/images/news/img.png";
import img2 from "../../assets/images/news/img_2.png";
import svg from "../../assets/images/news/svg.png";
import svgDot from "../../assets/images/news/sbg_dot.svg";
import svgLeft from "../../assets/images/news/svg_left.svg";
import svgLeft1 from "../../assets/images/news/svg_left_1.svg";
import svgRight from "../../assets/images/news/svg_right.svg";
import img3 from "../../assets/images/news/img.jpg";
import img4 from "../../assets/images/news/img_4.png";
const New = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-[5.5rem] mb-[2rem]">
        <div className="relative ">
          <img src={img} alt="1" className="w-[93vw] rounded-[2.6rem]" />
          <img src={img2} alt="1" className="absolute top-0 left-0" />
          <img
            src={svg}
            alt="1"
            className="absolute bottom-0 right-0 rounded-[2.6rem]"
          />

          <div className="absolute top-[15%] left-[5%] right-[5%] ">
            <div className=" grid grid-cols-3  w-[100%] gap-[20px]">
              {/* left */}
              <div className="col-span-1 mt-[7%]">
                <div className="left-[4%] top-[15%] flex flex-col gap-[0.7rem]">
                  <div className="flex items-center  gap-[0.58rem]">
                    <img src={svgDot} alt="dot" className="" />
                    <span className="font-Inter text-[1.3rem] text-[#F9F9F9] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
                      DANH SÁCH TIN TỨC
                    </span>
                  </div>
                  <span className="font-sans text-15 font-bold leading-[120%] tracking-[-0.10417rem] max-w-[22rem] text-[#F9F9F9] mt-[0.36rem]">
                    Có gì mới tại Ami&M?
                  </span>
                  <div className="font-Inter text-13 text-[#F9F9F9] font-medium leading-[150%] tracking-[-0.01875rem] mt-[1.5rem] max-w-[24rem] ">
                    Ami&M, viết tắt của Amity and More Tình bằng hữu và hơn thế
                    nữa chính là cái tên và cũng là sự khẳng định cho tôn chỉ mà
                    chúng tôi luôn tâm niệm.
                  </div>
                </div>
                <div className="flex items-center gap-[1rem] mt-[3.5rem]">
                  <button className=" py-[1.2rem] px-[2.3rem] uppercase text-13  flex items-center gap-[0.36rem] ring ring-1-[#3E4089]  rounded-[2.39583rem] hover:bg-hover-gradient text-primary font-bold">
                    Xem chi tiết
                    <img src={svgLeft} alt="" />
                  </button>
                </div>
              </div>
              {/* right */}
              <div className="col-span-2 grid grid-cols-2 relative">
                <div className="col-span-1 relative flex flex-col items-center ">
                  <img src={img3} alt="" className="w-[90%] rounded-xl " />
                  <div className="absolute uppercase text-[#165BB8] px-[1.5rem] py-[0.7rem] text-13 font-Inter font-semibold tracking-[0.0025rem] leading-[130%] bg-white top-[5%] left-[10%] rounded-3xl">
                    Nổi bật
                  </div>
                  <div className="absolute uppercase text-white text-13 font-sans font-semibold tracking-[0.00948rem] leading-[150%] bottom-[20%] left-[10%] ">
                    Xem chi tiết{" "}
                    <img src={img4} alt="" className="text-white" />
                  </div>
                  <div className="flex flex-col w-[86%] mt-[1.2rem] gap-[0.57rem]">
                    <span className="uppercase text-white text-[1.5rem] font-sans font-bold tracking-[-0.01042rem] leading-[125%] ">
                      20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                    </span>
                    <span className="uppercase text-white text-13 font-Inter font-medium tracking-[-0.00729rem] leading-[150%] ">
                      24/12/2023
                    </span>
                  </div>
                </div>

                <div className="col-span-1 relative flex flex-col items-center ">
                  <img src={img3} alt="" className="w-[90%] rounded-xl " />
                  <div className="absolute uppercase text-[#165BB8] px-[1.5rem] py-[0.7rem] text-13 font-Inter font-semibold tracking-[0.0025rem] leading-[130%] bg-white top-[5%] left-[10%] rounded-3xl">
                    Nổi bật
                  </div>
                  <div className="absolute uppercase text-white text-13 font-sans font-semibold tracking-[0.00948rem] leading-[150%] bottom-[20%] left-[10%] ">
                    Xem chi tiết{" "}
                    <img src={img4} alt="" className="text-white" />
                  </div>
                  <div className="flex flex-col w-[86%] mt-[1.2rem] gap-[0.57rem]">
                    <span className="uppercase text-white text-[1.5rem] font-sans font-bold tracking-[-0.01042rem] leading-[125%] ">
                      20/10 Tràn ngập tiếng cười ấm áp tại văn phòng Ami&M
                    </span>
                    <span className="uppercase text-white text-13 font-Inter font-medium tracking-[-0.00729rem] leading-[150%] ">
                      24/12/2023
                    </span>
                  </div>
                </div>

                <img
                  src={svgLeft1}
                  alt=""
                  className="absolute top-[38%] w-[13%] left-[-5%]"
                />
                <img
                  src={svgRight}
                  alt=""
                  className="absolute top-[38%] w-[13%] right-[-5%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;

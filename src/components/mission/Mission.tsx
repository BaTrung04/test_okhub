import svgDot from "../../assets/images/map/svg_dot.svg";
import svg1 from "../../assets/images/mission/svg_1.svg";
import svg2 from "../../assets/images/mission/svg_2.png";
import svg3 from "../../assets/images/mission/svg_3.svg";
import svg4 from "../../assets/images/mission/svg_4.svg";
import svg5 from "../../assets/images/mission/svg_5.svg";
// import svg6 from "../../assets/images/mission/svg_6.svg";
import img from "../../assets/images/mission/img_2.png";

const Mission = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative z shadow-md">
        <div className="w-[110vw] xl:h-[25.76042rem] lg:h-[23rem] md:h-[20rem] h-[17rem] rounded-[50%] bg-bg-gradient relative mt-[2.3rem]">
          <div className="absolute top-[45%] inset-0 m-auto">
            <div className="flex items-center justify-center gap-[0.58rem]">
              <img src={svgDot} alt="dot" />
              <span className="font-Inter text-[1.3rem text-[#165BB8] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
                sứ mệnh
              </span>
              <img src={svgDot} alt="dot" />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-[80%] lg:text-14 md:text-[2.6rem] text-[1.3rem] font-extrabold flex flex-col items-center justify-center ">
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
            className="absolute z-10 top-[15%] left-[4%] "
          />
        </div>
        {/* laptop */}
        <div className="container  grid-cols-2 gap-[1rem] sm:grid hidden">
          {/* card_1 */}
          <div className=" bg-white py-[5rem] ">
            <div className=" max-h-[23rem] flex flex-col gap-[0.57rem] ">
              <img
                src={svg1}
                alt=""
                className="lg:w-[6rem] md:w-[4rem] w-[2.2rem]"
              />
              <div className="lg:text-[1.8rem] md:text-[1.5rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
                với cán bộ nhân viên
              </div>
              <div className="xl:w-[23rem] md:w-[23rem] w-[14.5rem] lg:text-13 md:text-[1rem] text-[0.7rem] font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
                Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá,
                phát triển, khẳng định giá trị bản thân
              </div>
            </div>
          </div>
          {/* img */}
          <div className="flex items-center justify-center">
            <img
              src={img}
              alt=""
              className=" xl:h-full object-cover rounded-3xl "
            />
          </div>
          {/* card_2 */}
          <div className=" bg-white py-[5rem] ">
            <div className=" max-h-[23rem] flex flex-col gap-[0.57rem] ">
              <img
                src={svg2}
                alt=""
                className="lg:w-[6rem] md:w-[4rem] w-[2.2rem]"
              />
              <div className="lg:text-[1.8rem] md:text-[1.5rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
                với khách hàng
              </div>
              <div className="xl:w-[23rem] md:w-[23rem] w-[14.5rem] lg:text-13 md:text-[1rem] text-[0.7rem] font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
                Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang
                đến cho khách hàng những trải nghiệm tốt nhất
              </div>
            </div>
          </div>
          <div>1</div>
          {/* card_3 */}
          <div className=" bg-white py-[5rem] ">
            <div className=" max-h-[23rem] flex flex-col gap-[0.57rem] ">
              <img
                src={svg3}
                alt=""
                className="lg:w-[6rem] md:w-[4rem] w-[2.2rem]"
              />
              <div className="lg:text-[1.8rem] md:text-[1.5rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
                Với đối tác
              </div>
              <div className="xl:w-[23rem] md:w-[23rem] w-[14.5rem] lg:text-13 md:text-[1rem] text-[0.7rem] font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
                Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát
                triển bền vững và hướng tới những giá trị tốt đẹp
              </div>
            </div>
          </div>
          <div>1</div>
          {/* card_4 */}
          <div className=" bg-white py-[5rem] ">
            <div className=" max-h-[23rem] flex flex-col gap-[0.57rem] ">
              <img
                src={svg3}
                alt=""
                className="lg:w-[6rem] md:w-[4rem] w-[2.2rem]"
              />
              <div className="lg:text-[1.8rem] md:text-[1.5rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
                VỚI CỘNG ĐỒNG
              </div>
              <div className="xl:w-[23rem] md:w-[23rem] w-[14.5rem] lg:text-13 md:text-[1rem] text-[0.7rem] font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
                Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích
                cực cho các hoạt động hướng về cộng đồng
              </div>
            </div>
          </div>
          <div>1</div>
        </div>
        {/* mobile */}
        <div className="container flex flex-col gap-[1.2rem] sm:hidden ">
          <div className="flex items-center justify-center">
            <img
              src={img}
              alt=""
              className=" h-[70%] object-cover rounded-3xl "
            />
          </div>
          {/* card_1 */}
          <div className=" bg-white p-[1.25rem] border border-[#EDEDED] rounded-[0.83333rem] flex flex-col gap-[0.65rem]">
            <img src={svg1} alt="" className="w-[4.1rem] h-[4rem] " />
            <div className="text-[1.2rem] font-sans font-bold leading-[125%] tracking-[-0.01042rem] text-[#165BB8] uppercase">
              với cán bộ nhân viên
            </div>
            <div className="max-w-[22rem] text-[1rem] font-Inter font-medium leading-[150%] tracking-[-0.00729rem] ">
              Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá,
              phát triển, khẳng định giá trị bản thân
            </div>
          </div>
          {/* card_2 */}
          <div className=" bg-white p-[1.25rem] border border-[#EDEDED] rounded-[0.83333rem] flex flex-col gap-[0.65rem]">
            <img src={svg2} alt="" className="w-[4.1rem] h-[4rem] " />
            <div className="text-[1.2rem] font-sans font-bold leading-[125%] tracking-[-0.01042rem] text-[#165BB8] uppercase">
              với khách hàng
            </div>
            <div className="max-w-[22rem] text-[1rem] font-Inter font-medium leading-[150%] tracking-[-0.00729rem] ">
              Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến
              cho khách hàng những trải nghiệm tốt nhất
            </div>
          </div>
          {/* card_3 */}
          <div className=" bg-white p-[1.25rem] border border-[#EDEDED] rounded-[0.83333rem] flex flex-col gap-[0.65rem]">
            <img src={svg3} alt="" className="w-[4.1rem] h-[4rem] " />
            <div className="text-[1.2rem] font-sans font-bold leading-[125%] tracking-[-0.01042rem] text-[#165BB8] uppercase">
              Với đối tác
            </div>
            <div className="max-w-[22rem] text-[1rem] font-Inter font-medium leading-[150%] tracking-[-0.00729rem] ">
              Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển
              bền vững và hướng tới những giá trị tốt đẹp
            </div>
          </div>
          {/* card_4 */}
          <div className=" bg-white p-[1.25rem] border border-[#EDEDED] rounded-[0.83333rem] flex flex-col gap-[0.65rem]">
            <img src={svg4} alt="" className="w-[4.1rem] h-[4rem] " />
            <div className="text-[1.2rem] font-sans font-bold leading-[125%] tracking-[-0.01042rem] text-[#165BB8] uppercase">
              VỚI CỘNG ĐỒNG
            </div>
            <div className="max-w-[22rem] text-[1rem] font-Inter font-medium leading-[150%] tracking-[-0.00729rem] ">
              Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực
              cho các hoạt động hướng về cộng đồng
            </div>
          </div>
        </div>
        {/* card4 */}
        {/* <div className=" bg-bg-card-gradient  py-[5rem] w-[100vw] relative ">
          <div className="w-[38rem] max-h-[23rem] 2xl:pl-[15rem] xl:pl-[12rem] flex flex-col gap-[0.57rem] ">
            <img src={svg4} alt="" className="w-[6rem]" />
            <div className="text-[1.8rem] font-sans font-bold leading-[130%] tracking-[-0.05417rem] text-[#165BB8] uppercase">
              VỚI CỘNG ĐỒNG
            </div>
            <div className="text-13 font-Inter font-medium leading-[150%] tracking-[-0.01875rem] ">
              Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực
              cho các hoạt động hướng về cộng đồng
            </div>
          </div>
          <img
            src={svg5}
            alt=""
            className="absolute z-10 bottom-[-100%] left-0"
          />
        </div> */}
      </div>
    </>
  );
};

export default Mission;

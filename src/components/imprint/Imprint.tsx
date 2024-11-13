import svgDot from "../../assets/images/map/svg_dot.svg";
import svg1 from "../../assets/images/mission/svg_1.svg";
import svg2 from "../../assets/images/imprint/svg_2.svg";
import svg3 from "../../assets/images/imprint/svg_3.png";
import svg4 from "../../assets/images/imprint/svg_4.png";
import svg5 from "../../assets/images/imprint/svg_5.svg";
const Imprint = () => {
  return (
    <>
      <div className="mt-[2.7rem]">
        <div className="grid grid-cols-2 container ">
          <div className="flex flex-col gap-[0.8rem] border-r border-r-[#EDEDED]">
            <div className="flex items-center gap-[0.58rem]">
              <img src={svgDot} alt="dot" />
              <span className="font-Inter text-[1.3rem] text-[#165BB8] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
                từng bước phát triển
              </span>
            </div>
            <span className="font-sans text-[5.5rem] font-bold leading-[120%] tracking-[-0.18333rem] text-transparent bg-clip-text bg-text-gradient">
              Dấu ấn Ami&M
            </span>
            <div className="text-13 font-Inter font-medium leading-[150%] tracking-[-0.01875rem] w-[32rem]">
              Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là
              những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin
              cậy từ những Người đồng hành.
            </div>
          </div>
          <div>
            <div>
              {/* 1 */}
              <div className="py-[3rem] pl-[3rem] flex  items-center gap-[2rem] border-b border-b-[#EDEDED]">
                <div className="w-[12rem] h-[12rem] bg-[#FBFBFB] flex items-center justify-center rounded-full">
                  <img src={svg1} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-Inter text-[4.4rem] font-extrabold leading-[131%] tracking-[-0.03542rem] text-[#2A2B6B]">
                    686 tỷ
                  </span>
                  <span className="font-Inter text-[1.5rem] font-semibold leading-[140%] tracking-[-0.01042rem] text-[#646464]">
                    Tổng tài sản và Vốn chủ sở hữu
                  </span>
                </div>
              </div>
              {/* 2 */}
              <div className="py-[3rem] pl-[3rem] flex  items-center gap-[2rem] border-b border-b-[#EDEDED]">
                <div className="w-[12rem] h-[12rem] bg-[#FBFBFB] flex items-center justify-center rounded-full">
                  <img src={svg2} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-Inter text-[4.4rem] font-extrabold leading-[131%] tracking-[-0.03542rem] text-[#2A2B6B]">
                    93,9 tỷ
                  </span>
                  <span className="font-Inter text-[1.5rem] font-semibold leading-[140%] tracking-[-0.01042rem] text-[#646464]">
                    Doanh thu thuần
                  </span>
                </div>
              </div>
              {/* 3 */}
              <div className="py-[3rem] pl-[3rem] flex  items-center gap-[2rem] border-b border-b-[#EDEDED]">
                <div className="w-[12rem] h-[12rem] bg-[#FBFBFB] flex items-center justify-center rounded-full">
                  <img src={svg3} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-Inter text-[4.4rem] font-extrabold leading-[131%] tracking-[-0.03542rem] text-[#2A2B6B]">
                    24,6 tỷ
                  </span>
                  <span className="font-Inter text-[1.5rem] font-semibold leading-[140%] tracking-[-0.01042rem] text-[#646464]">
                    Lợi nhuận gộp
                  </span>
                </div>
              </div>
              {/* 4 */}
              <div className="py-[3rem] pl-[3rem] flex  items-center gap-[2rem] border-b border-b-[#EDEDED]">
                <div className="w-[12rem] h-[12rem] bg-[#FBFBFB] flex items-center justify-center rounded-full">
                  <img src={svg4} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-Inter text-[4.4rem] font-extrabold leading-[131%] tracking-[-0.03542rem] text-[#2A2B6B]">
                    20+
                  </span>
                  <span className="font-Inter text-[1.5rem] font-semibold leading-[140%] tracking-[-0.01042rem] text-[#646464]">
                    Dự án trọng điểm
                  </span>
                </div>
              </div>
              {/* 3 */}
              <div className="py-[3rem] pl-[3rem] flex  items-center gap-[2rem] ">
                <div className="w-[12rem] h-[12rem] bg-[#FBFBFB] flex items-center justify-center rounded-full">
                  <img src={svg5} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-Inter text-[4.4rem] font-extrabold leading-[131%] tracking-[-0.03542rem] text-[#2A2B6B]">
                    03 văn phòng
                  </span>
                  <span className="font-Inter text-[1.5rem] font-semibold leading-[140%] tracking-[-0.01042rem] text-[#646464]">
                    Trên các tỉnh thành
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imprint;

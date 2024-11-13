import img from "../../assets/images/cooperate/img.png";
import img2 from "../../assets/images/cooperate/img_2.png";
import img3 from "../../assets/images/cooperate/img_3.png";
import img4 from "../../assets/images/cooperate/img_4.png";
import img5 from "../../assets/images/cooperate/img_5.png";
import img6 from "../../assets/images/cooperate/img6.svg";
import img7 from "../../assets/images/cooperate/img_7.svg";
import img8 from "../../assets/images/cooperate/img_7.png";
import img9 from "../../assets/images/cooperate/img_8.png";
import img10 from "../../assets/images/cooperate/img_9.png";
import img11 from "../../assets/images/cooperate/img_11.png";
import img12 from "../../assets/images/cooperate/img_12.png";
import img13 from "../../assets/images/cooperate/img_13.png";
import img14 from "../../assets/images/cooperate/img_14.png";
import img15 from "../../assets/images/cooperate/img_15.png";
import img16 from "../../assets/images/cooperate/img_16.png";
import img17 from "../../assets/images/cooperate/img_17.png";
import svgDot from "../../assets/images/map/svg_dot.svg";
import video from "../../assets/images/cooperate/video.mp4";

const Cooperate = () => {
  return (
    <>
      <div className="mt-[8.7rem] relative">
        <img src={img} alt="" className="w-[100vw]" />
        <img src={img2} alt="" className="absolute top-[-24%] w-[100vw]" />
        <img src={img3} alt="" className="absolute bottom-0 w-[90vw]" />
        <img src={img5} alt="" className="absolute bottom-0 right-0 w-[45%]" />
        <img src={img4} alt="" className="absolute bottom-0 right-0 w-[45%]" />
        <div className="absolute bottom-[-22%] left-0  w-[100vw] ">
          <img src={img11} alt="1" className="w-[100vw]" />
          <div className="absolute top-[5%] left-[12.5%]">
            <div className="flex items-center gap-[0.58rem]">
              <img src={svgDot} alt="dot" />
              <span className="font-Inter text-[1.3rem] text-[#165BB8] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
                ĐỐI TÁC TIÊU BIỂU
              </span>
            </div>
            <span className="font-sans text-[1.8rem] text-transparent bg-clip-text bg-text-gradient font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] uppercase">
              ĐỒNG HÀNH CÙNG AMI&M
            </span>
          </div>
          <div className="absolute flex items-center gap-[5.7rem] bottom-[15%] ">
            <img src={img12} alt="1" className="w-[110%]" />
            <img src={img13} alt="1" />
            <img src={img14} alt="1" />
            <img src={img15} alt="1" />
            <img src={img16} alt="1" />
            <img src={img17} alt="1" />
            <img src={img13} alt="1" />
            <img src={img14} alt="1" />
            <img src={img15} alt="1" />
          </div>
        </div>

        <div className="absolute top-[10%] left-[15%] ">
          <div className="container">
            <div className="flex flex-col gap-[1.5rem] ">
              <div className="flex items-center gap-[0.7rem]">
                <img src={svgDot} alt="dot" />
                <span className="font-Inter text-[1.3rem] text-gray-400 font-semibold leading-[150%] tracking-[-0.00833rem]  gap-[0.57rem] uppercase">
                  HỢP TÁC VỮNG BỀN
                </span>
              </div>
              <div className="text-[1.7rem] font-Inter font-semibold leading-[140%] tracking-[-0.01458rem] w-[40rem] text-white">
                Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây
                có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực
                ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong
                muốn đóng góp vào sự phát triển chung của quá trình giáo dục
                định hướng thế hệ trẻ.
              </div>
              <div>
                <span className="font-Inter text-[1.5rem] text-white font-semibold leading-[130%] tracking-[-0.02292rem] flex items-center gap-[0.57rem] ">
                  TS. Đinh Thanh Vân
                </span>
                <div className="flex items-center  gap-[0.58rem]">
                  <img src={img6} alt="6" className="w-[1.5rem] h-[1.5rem]" />
                  <span className="font-Inter text-[0.9rem] text-white font-semibold leading-[150%] tracking-[-0.00729rem]gap-[0.57rem] uppercase">
                    Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà
                    Nội
                  </span>
                  <img src={img7} alt="7" className="w-[1.5rem] h-[1.5rem]" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[1.5rem] mt-[1.5rem]">
              <img src={img8} alt="" />
              <img src={img9} alt="" />
              <img src={img10} alt="" />
            </div>
          </div>
        </div>
      </div>
      <video autoPlay muted loop className="w-[100%]">
        <source src={video} type="video/mp4"></source>
      </video>
    </>
  );
};

export default Cooperate;

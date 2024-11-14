import img from "../../assets/images/origin/img.svg";
import imgMb from "../../assets/images/origin/img_mb.png";
import imgMb2 from "../../assets/images/origin/img_mb_2.png";
import svgDot from "../../assets/images/origin/svg_dot.svg";
import svg1 from "../../assets/images/origin/svg_1.svg";
import svg2 from "../../assets/images/origin/svg_2.svg";
import svg3 from "../../assets/images/origin/svg3.svg";
import svg4 from "../../assets/images/origin/svg_4.svg";
import svg5 from "../../assets/images/origin/svg_5.svg";
import svg6 from "../../assets/images/origin/svg_6.svg";
import leftShort from "../../assets/images/origin/left-short.svg";

const Origin = () => {
  return (
    <>
      <div>
        <div className="relative">
          {/* laptop */}
          <div className="sm:block hidden">
            <img src={img} alt="" className="w-[100vw] relative" />
            <img
              src={svg1}
              alt="vector"
              className="absolute right-0 bottom-[-11.2%] w-[100%] z-[20]"
            />
            <img
              src={svg2}
              alt="vector"
              className="absolute right-0 bottom-[-9%] w-[100%] z-[30]"
            />
            <img
              src={svg3}
              alt="vector"
              className="absolute right-0 bottom-1 w-[100%] z-[10]"
            />
            <img
              src={svg4}
              alt="vector"
              className="absolute top-[50%] left-[58%] lg:w-[4.375rem] md:w-[2.5rem] w-[1.875rem] z-[10]"
            />
            <img
              src={svg5}
              alt="vector"
              className="absolute top-[19%] right-[11%] lg:w-[9rem] md:w-[6rem] w-[3rem] z-[8]"
            />
            <img
              src={svg6}
              alt="vector"
              className="absolute bottom-[19%] right-[7%] lg:w-[9rem] md:w-[6rem] w-[3rem] z-[30]"
            />
          </div>
          <div className=" absolute w-[100vw] 2xl:top-[6.5rem] xl:top-[5rem] lg:top-[3rem] md:top-[2rem] top-[1.5rem] z-[50]">
            <div className=" xl:ml-[10rem] lg:ml-[8rem] sm:ml-[3rem] md:ml-[2.5rem] ">
              <div className="lg:w-[35.1875rem] lg:h-[30.8125rem] w-[full]  2xl:pt-[3.4rem] xl:pt-[1.5rem] text-primary sm:block flex flex-col  items-center justify-start">
                <div className=" w-[80%]">
                  <div className="font-Inter xl:text-[1rem] lg:text-[0.8rem] md:text-[0.7rem] text-[0.8rem] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem] sm:mt-0 mt-[1.3rem]">
                    <img src={svgDot} alt="dot" />
                    <span>CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM</span>
                  </div>
                  <div className="font-sans 2xl:text-15 xl:text-[3.5rem] lg:text-[3rem] md:text-[2rem] text-[2.5rem] font-bold leading-[120%] xl:w-[30.66667rem] lg:w-[25rem] md:w-[15rem] tracking-[-0.13479rem] uppercase pt-[0.57rem] sm:mt-0 mt-[1.3rem]">
                    Khởi nguồn từ Tình bằng hữu
                  </div>
                  <div className="font-Inter xl:text-13 lg:text-[1rem] md:text-[0.9rem] text-[0.8rem] font-medium leading-[150%] tracking-[-0.01875rem] lg:w-[26.66667rem] md:w-[24rem]  xl:mt-[3.5rem] lg:mt-[2rem] sm:mt-[1rem] mt-[1.5rem]">
                    Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung
                    chí hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng
                    nhau nỗ lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính
                    thức đi vào hoạt động.
                  </div>
                  <div className="font-Inter xl:text-13 lg:text-[1rem] md:text-[0.9rem] text-[0.8rem] font-medium leading-[150%] tracking-[-0.01875rem] xl:mt-[1.67rem] lg:mt-[2rem] sm:mt-[1rem] mt-[1.5rem]">
                    Tại Ami&M, chúng tôi được sống và làm việc hết mình!
                    <div className="md:w-[29rem]">
                      Được gắn bó và kết nối cũng những người bằng hữu mà chúng
                      tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân
                      để phát triển, thoả sức thử thách và gắn bó nhiệt thành để
                      cùng nhau kiến tạo các giá trị mà mình tin tưởng.
                    </div>
                  </div>
                  <div className="flex items-center gap-[1rem] xl:mt-[3.5rem] lg:mt-[2rem] mt-[1.5rem] ">
                    <button className=" xl:py-[1.3rem] lg:py-[0.8rem] py-[0.7rem] md:py-[0.5rem] py xl:px-[2.3rem] lg:px-[1.8rem] md:px-[1.5rem] px-[1.3rem] uppercase  xl:text-13 lg:text-[1rem] md:text-[0.9rem] text-[0.7rem]  flex items-center gap-[0.36rem]  rounded-[2.39583rem]  bg-[#2F2E79] hover:bg-hover-gradient text-primary font-bold">
                      Hành trình của Ami&M
                      <img src={leftShort} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="sm:hidden block">
            <img src={imgMb} alt="" className="w-[100vw] relative" />
            <img
              src={svg4}
              alt="vector"
              className="absolute bottom-[15%] right-[15%] w-[1.875rem] z-[20]"
            />
            <img
              src={svg5}
              alt="vector"
              className="absolute bottom-[32%] left-[31%] w-[3.8rem] z-[8]"
            />
            <img
              src={svg6}
              alt="vector"
              className="absolute bottom-[11%] left-[25%]  w-[2.3rem] z-[30]"
            />
            <img
              src={imgMb2}
              alt="vector"
              className="absolute right-[0%] bottom-[4.1%] w-[100%] z-[10]"
            />
            <img
              src={svg1}
              alt="vector"
              className="absolute right-0 bottom-[-2.4%] w-[100%] z-[20]"
            />
            <img
              src={svg2}
              alt="vector"
              className="absolute right-0 bottom-[-2%] w-[100%] z-[30]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Origin;

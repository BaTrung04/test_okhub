import img from "../../assets/images/origin/img.svg";
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
            className="absolute top-[50%] left-[58%] w-[70px] z-[10]"
          />
          <img
            src={svg5}
            alt="vector"
            className="absolute top-[19%] right-[10%] z-[8]"
          />
          <img
            src={svg6}
            alt="vector"
            className="absolute bottom-[19%] right-[7%] z-[30]"
          />
          <div className="absolute w-[100vw] top-[6.5rem] z-[50]">
            <div className="container ">
              <div className="w-[35.1875rem] h-[30.8125rem] pt-[3.4rem] text-primary">
                <div className="font-Inter text-[1rem] font-semibold leading-[150%] tracking-[-0.00833rem] flex items-center gap-[0.57rem]">
                  <img src={svgDot} alt="dot" />
                  CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM
                </div>
                <div className="font-sans text-15 font-bold leading-[120%] w-[30.66667rem] tracking-[-0.13479rem] uppercase pt-[0.57rem]">
                  Khởi nguồn từ Tình bằng hữu
                </div>
                <div className="font-Inter text-13 font-medium leading-[150%] tracking-[-0.01875rem] w-[26.66667rem] mt-[3.5rem]">
                  Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí
                  hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ
                  lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào
                  hoạt động.
                </div>
                <div className="font-Inter text-13 font-medium leading-[150%] tracking-[-0.01875rem] mt-[1.67rem]">
                  Tại Ami&M, chúng tôi được sống và làm việc hết mình!
                  <div>
                    Được gắn bó và kết nối cũng những người bằng hữu mà chúng
                    tôi gọi là ANH EM - AM, được bứt phá các giới hạn bản thân
                    để phát triển, thoả sức thử thách và gắn bó nhiệt thành để
                    cùng nhau kiến tạo các giá trị mà mình tin tưởng.
                  </div>
                </div>
                <div className="flex items-center gap-[1rem] mt-[3.5rem]">
                  <button className=" py-[1.3rem] px-[2.3rem] uppercase text-13  flex items-center gap-[0.36rem]  rounded-[2.39583rem]  bg-[#2F2E79] hover:bg-hover-gradient text-primary font-bold">
                    Hành trình của Ami&M
                    <img src={leftShort} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Origin;

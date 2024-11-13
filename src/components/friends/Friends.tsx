import img from "../../assets/images/friend/img.jpg";
import img2 from "../../assets/images/friend/img_2.png";
const Friends = () => {
  return (
    <>
      <div className="relative">
        <img src={img} alt="1" />
        <img
          src={img2}
          alt="2"
          className="absolute bottom-0 w-[100vw] z-[20]"
        />
        <div className="absolute flex items-center justify-center w-[100vw] bottom-[36%] text-center">
          <div className="font-sans text-[2.5rem] font-bold leading-[148%] tracking-[-0.02083rem] w-[80rem]">
            <div className="text-[#F9F9F9]">
              “Tình bằng hữu, sự chính trực và tinh thần
            </div>
            <div className="text-[#F9F9F9]">
              tự nâng tầm hun đúc nên tinh thần của một tổ chức{" "}
              <span className="text-gray-500">không ngừng</span>
            </div>
            <div className="text-gray-500">học tập để kiến tạo giá trị.”</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;

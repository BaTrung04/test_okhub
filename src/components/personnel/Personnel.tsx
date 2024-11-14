import img from "../../assets/images/footer/img.jpg";
import svg from "../../assets/images/footer/svg.png";
const Personnel = () => {
  return (
    <>
      <div className="w-[100vw] relative bg-[#fbfbfb] z-[10] h-auto pb-[22%]">
        <div className=" container w-[100vw] flex  justify-center">
          <img src={svg} alt="" className="w-[85%] mt-[2%] " />
        </div>
        <img src={img} alt="1" className="w-[100vw] absolute top-[21%] " />
      </div>
    </>
  );
};

export default Personnel;

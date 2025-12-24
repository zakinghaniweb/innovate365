import { IoClose } from "react-icons/io5";
import "./Overlay.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const Overlay = ({ showOverlay, closeOverlay }) => {
  return (
    <div
      id="overlay"
      className={`${
        showOverlay ? "top-0 opacity-[1]" : "top-[-100%] opacity-0"
      } transition-all duration-500`}
    >
      <div className="overlayPreview">
        <button className="overlayClose" onClick={closeOverlay}>
          <IoClose />
        </button>
        <div className="max-w-[700px]">
          {/* <h1 className="font-bold text-[50px]">Trabook</h1> */}
          <img className="!w-[300px]" src="images/trabook.png" alt="Logo" />
          <p className="font-normal text-[16px] leading-[30px] text-[#414141] mt-[25px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur et
            ratione nobis molestiae aliquam consequuntur libero eius velit quam
            harum animi magnam sequi labore dolorum sapiente exercitationem
            atque, quod minus aperiam suscipit molestias numquam. Earum tempore
            quisquam enim libero ipsum vel. Explicabo fugiat esse harum? Nemo
            sint, eligendi tempore sunt dignissimos totam libero eveniet sequi
            nisi quasi dolore dolor, fugiat maxime quisquam ipsum, nulla aperiam
            inventore? Id iste nam obcaecati a architecto culpa totam quisquam
            provident vitae alias placeat doloribus in reprehenderit ducimus
            perferendis aliquid ex ea nisi, dolor voluptatibus? Sed magni nihil
            dignissimos odio expedita dolorum totam deleniti fugiat?
          </p>
          <Link
            href={"#"}
            className="flex items-center gap-[12px] mt-[20px] group"
          >
            <span className="font-semibold text-[20px]">See more</span>
            <FaLongArrowAltRight className="text-xl group-hover:ml-[12px] transition-all" />
          </Link>
        </div>
        <div className="w-[600px] h-[750px] self-end overflow-hidden">
          <img
            className="object-cover border-[1px] border-gray-200 rounded-2xl translate-y-0 hover:translate-y-[calc(-100%+700px)] transition ease-in-out duration-[2s]"
            src="images/page.png"
            alt="page"
          />
        </div>
      </div>
    </div>
  );
};

export default Overlay;

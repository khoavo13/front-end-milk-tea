import React from "react";
import { Link } from "react-router-dom";
import { banner2, banner4 } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import BannerSlide from "./BannerSlide";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <BannerSlide />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover rounded-[12px]" imgSrc={banner4} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover rounded-[12px]" imgSrc={banner2} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="z-40 bg-[#EDF3F8]">
      <div className="mx-auto flex max-w-[1600px] justify-between px-6 py-10 md:px-10 lg:px-40">
        <div className="flex gap-16">
          <Image
            src="/images/shared/desktop/logo.svg"
            alt="PayAPI"
            width={135}
            height={38}
            className="object-contain"
          />
          {/* Desktop Only */}
          <div className="hidden gap-10 font-sans text-body font-bold text-blue-grey md:flex">
            <button>Pricing</button>
            <button>About</button>
            <button>Contact</button>
          </div>
        </div>
        {/* Mobile Only */}
        <button>
          <Image
            src="/images/shared/mobile/menu.svg"
            alt="Menu"
            width={28}
            height={27}
            className="md:hidden"
          />
        </button>
        {/* Desktop Only */}
        <button className="hidden rounded-full bg-dark-pink px-6 py-3 font-sans text-body font-bold tracking-[-0.115px] text-white md:block">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#EDF3F8]">
      <div className="mx-auto flex max-w-[1600px] justify-between px-6 py-10 md:px-10 lg:px-40">
        <div className="flex gap-16">
          <Link href="/">
            <Image
              src="/images/shared/desktop/logo.svg"
              alt="PayAPI"
              width={135}
              height={38}
              className="object-contain"
            />
          </Link>
          {/* Desktop Only */}
          <div className="child:opacity-70 child-hover:opacity-100 child:my-auto hidden gap-10 font-sans text-body font-bold text-blue-grey md:flex">
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
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
        <Link
          href="/contact"
          className="hidden rounded-full bg-dark-pink px-6 py-3 font-sans text-body font-bold tracking-[-0.115px] text-white hover:bg-light-pink md:block"
        >
          Schedule a Demo
        </Link>
      </div>
    </header>
  );
};

export default Header;

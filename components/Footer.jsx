import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-dark-grey">
      {/* Mobile Circle */}
      <div className="pointer-events-none absolute w-[150%] md:hidden">
        <Image
          src="/images/shared/desktop/bg-pattern-circle.svg"
          alt="Circle"
          width={1280}
          height={1280}
          className="absolute bottom-0 left-0 z-20 translate-x-[-16.4%] translate-y-[130%] min-[470px]:translate-y-[120%]"
        />
      </div>
      {/* Tablet & Desktop Circle */}
      <Image
        src="/images/shared/desktop/bg-pattern-circle.svg"
        alt="Circle"
        width={1280}
        height={1280}
        className="pointer-events-none absolute bottom-0 z-20 translate-x-[-16.4%] translate-y-[130%] min-[470px]:translate-y-[120%] md:right-0 md:translate-x-[40%] md:translate-y-[70%]"
      />
      <div className="z-30 mx-auto flex max-w-[1600px] flex-col items-center px-8 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-40">
        <div className="md:flex md:gap-16">
          <Link href="/">
            <Image
              src="/images/shared/desktop/logo.svg"
              alt="PayAPI"
              width={135}
              height={38}
              className="object-contain"
            />
          </Link>
          <ul className="mt-10 flex flex-col items-center gap-8 md:mt-0 md:flex-row">
            <li>
              <Link
                href="/pricing"
                className="font-sans text-body font-bold text-[#b7bcc0]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-sans text-body font-bold text-[#b7bcc0]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-sans text-body font-bold text-[#b7bcc0]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul className="mt-10 flex items-center gap-6 md:mt-0">
          <li className="inline-flex">
            <button>
              <Image
                src="/images/shared/desktop/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </button>
          </li>
          <li className="inline-flex">
            <button>
              <Image
                src="/images/shared/desktop/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </button>
          </li>
          <li className="inline-flex">
            <button>
              <Image
                src="/images/shared/desktop/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

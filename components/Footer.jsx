import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-dark-grey">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-8 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-40">
        <div className="md:flex md:gap-16">
          <Image
            src="/images/shared/desktop/logo.svg"
            alt="PayAPI"
            width={135}
            height={38}
            className="object-contain"
          />
          <ul className="mt-10 flex flex-col items-center gap-8 md:mt-0 md:flex-row">
            <li>
              <button className="font-sans text-body font-bold text-[#b7bcc0]">
                Pricing
              </button>
            </li>
            <li>
              <button className="font-sans text-body font-bold text-[#b7bcc0]">
                About
              </button>
            </li>
            <li>
              <button className="font-sans text-body font-bold text-[#b7bcc0]">
                Contact
              </button>
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

import React from "react";
import Image from "next/image";
import ScheduleDemo from "@/components/ScheduleDemo";

const Perks = ({ featuredPerks }) => {
  const perks = [
    "Transactions",
    "Auth",
    "Identity",
    "Investments",
    "Assets",
    "Liabilities",
    "Income",
  ];

  return (
    <ul className="flex flex-col gap-2">
      {perks.map((perk) => {
        return (
          <li
            className={`flex gap-6 font-sans text-[16px] leading-[28px] ${
              featuredPerks.includes(perk) ? "text-blue-grey" : "text-[#92a3b1]"
            }`}
            key={crypto.randomUUID()}
          >
            <Image
              src="/images/shared/desktop/icon-check.svg"
              alt="Checkmark"
              width={14}
              height={11}
              className={`object-contain ${
                featuredPerks.includes(perk) ? "" : "opacity-0"
              }`}
            />
            {perk}
          </li>
        );
      })}
    </ul>
  );
};

const Plan = ({ name, description, price, featuredPerks }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4 lg:text-left">
        <h2 className="lg:tracking-[-0.246px font-serif text-h4 leading-h4 tracking-[-0.185px] text-dark-pink lg:text-h3-l lg:leading-h3-l">
          {name} Plan
        </h2>
        <p className="font-sans text-body leading-body text-light-grey">
          {description}
        </p>
      </div>
      <div className="space-y-6">
        <h3 className="text-center font-serif text-h1-s leading-h1-s tracking-[-0.431px] text-blue-grey lg:text-left">
          {price}
        </h3>
        <hr className="text-[#c0cbd5]" />
        <div className="flex justify-center lg:justify-start">
          <Perks featuredPerks={featuredPerks} />
        </div>
        <hr className="text-[#c0cbd5]" />
        <div className="flex w-full justify-center lg:justify-start">
          <button className="rounded-full border-[1px] border-solid border-blue-grey px-7 py-4 font-sans text-body font-bold tracking-[-0.115px] text-blue-grey">
            Request Access
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 z-30 min-h-screen w-[150%] lg:w-full">
          <Image
            src="/images/shared/desktop/bg-pattern-circle.svg"
            alt="Circle"
            width={780}
            height={780}
            className="absolute right-0 top-0 w-full translate-x-[20.5%] translate-y-[-100%] md:translate-x-[30%] md:translate-y-[-85%] min-[1140px]:translate-x-[25%] min-[1140px]:translate-y-[-85%] lg:w-1/2"
          />
        </div>
      </div>
      <main className="mx-auto max-w-[1600px] space-y-12 px-6 pt-2 md:space-y-16 md:px-10 md:pt-10 lg:px-40">
        <h1 className="text-center font-serif text-h3-l leading-[36px] tracking-[-0.246px] text-blue-grey md:text-h2 md:leading-h2 md:tracking-[-0.369px] lg:text-left lg:text-h1-s lg:leading-h1-s">
          Pricing
        </h1>
        <div className="flex flex-col gap-12 md:flex-row">
          <Plan
            name={"Free"}
            description="Build and test using our core set of products with up to 100 API requests"
            price="$0.00"
            featuredPerks={["Transactions", "Auth", "Identity"]}
          />
          <Plan
            name={"Basic"}
            description="Launch your project with unlimited requests and no contractual minimums"
            price="$249.00"
            featuredPerks={[
              "Transactions",
              "Auth",
              "Identity",
              "Investments",
              "Assets",
            ]}
          />
          <Plan
            name={"Premium"}
            description="Get tailored solutions, volume pricing, and dedicated support for your team"
            price="$499.00"
            featuredPerks={[
              "Transactions",
              "Auth",
              "Identity",
              "Investments",
              "Assets",
              "Liabilities",
              "Income",
            ]}
          />
        </div>
      </main>
      <ScheduleDemo />
    </>
  );
};

export default Pricing;

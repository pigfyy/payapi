import React from "react";

const ScheduleDemo = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-6 py-20 text-center md:gap-10 md:px-10 md:py-[100px] lg:flex-row lg:items-center lg:justify-between lg:px-40">
      <h6 className="font-serif text-h3-l leading-[36px] tracking-[-0.246px] text-blue-grey md:text-h2 md:leading-h2">
        Ready to start?
      </h6>
      <form>
        {/* Mobile Form */}
        <div className="flex flex-col gap-4 md:hidden">
          <input
            type="text"
            placeholder="Enter email address"
            className="rounded-full px-7 py-[15px] font-sans text-body font-bold text-blue-grey shadow-md focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-dark-pink px-2 py-[15px] text-body font-bold tracking-[-0.115px] text-white"
          >
            Schedule a Demo
          </button>
        </div>
        {/* Desktop Form */}
        <div className="mx-auto hidden w-[500px] overflow-hidden rounded-full bg-[#fff] md:flex md:shadow-lg lg:max-w-none lg:shadow-xl">
          <input
            type="text"
            placeholder="Enter email address"
            className="w-full px-9 py-[15px] font-sans text-body font-bold text-blue-grey shadow-md focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 rounded-full bg-dark-pink px-[25px] py-[15px] text-body font-bold tracking-[-0.115px] text-white"
          >
            Schedule a Demo
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleDemo;

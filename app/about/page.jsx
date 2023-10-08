import React from "react";
import Image from "next/image";
import ScheduleDemo from "@/components/ScheduleDemo";

const About = () => {
  return (
    <>
      {/* Circle */}
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
      <main className="flex flex-col items-center">
        <div className="max-w-[1600px] space-y-10 px-6 pb-20 pt-2 text-center md:space-y-14 md:px-10 md:pt-8 lg:px-[260px]">
          <h1 className="mx-auto font-serif text-h3-l font-normal leading-h3-l tracking-[-0.246px] text-blue-grey md:w-3/4 md:text-h2 md:leading-h2 md:tracking-[-0.369px] lg:mx-0  lg:text-left lg:text-h1-s lg:leading-h1-s lg:tracking-[-0.431px]">
            We empower innovators by delivering access to the financial system
          </h1>
          <div className="space-y-12 md:space-y-16 lg:space-y-14">
            <div className="space-y-4 md:flex md:gap-[10px] md:space-y-0 md:text-left lg:gap-[30px]">
              <h2 className="font-serif text-h4 leading-h4 tracking-[-0.185px] text-blue-grey md:min-w-[223px] md:max-w-[223px] md:text-h3-l md:leading-h3-l  md:tracking-[-0.246px] lg:min-w-[255px] lg:max-w-[255px]">
                Our Vision
              </h2>
              <p className="font-sans text-body leading-body text-light-grey">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.
              </p>
            </div>
            <div className="space-y-4 md:flex md:gap-[10px] md:space-y-0 md:text-left lg:gap-[30px]">
              <h2 className="font-serif text-h4 leading-h4 tracking-[-0.185px] text-blue-grey md:min-w-[223px] md:max-w-[223px] md:text-h3-l md:leading-h3-l  md:tracking-[-0.246px] lg:min-w-[255px] lg:max-w-[255px]">
                Our Business
              </h2>
              <p className="font-sans text-body leading-body text-light-grey">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/images/about/mobile/image-team-members.jpg"
          alt="Group of people around a coffee table working"
          width={1440}
          height={500}
          className="md:hidden"
        />
        {/* Tablet */}
        <Image
          src="/images/about/tablet/image-team-members.jpg"
          alt="Group of people around a coffee table working"
          width={1440}
          height={500}
          className="hidden md:block lg:hidden"
        />
        {/* Desktop */}
        <Image
          src="/images/about/desktop/image-team-members.jpg"
          alt="Group of people around a coffee table working"
          width={1440}
          height={500}
          className="hidden lg:block"
        />
        <div className="lg:pt-18 w-full max-w-[1600px] px-6 pt-12 text-center md:px-10 md:pt-16 lg:px-0">
          <div className="space-y-4 lg:px-[165px]">
            <hr className="text-blue-grey opacity-25 md:hidden" />
            <div className="space-y-8 md:grid md:grid-cols-3 md:gap-[10px] md:space-y-0">
              <div className="w-full space-y-4 text-left">
                <hr className="hidden text-blue-grey opacity-25 md:block" />
                <div>
                  <h3 className="font-sans text-[16px] leading-body text-blue-grey opacity-70">
                    Team Members
                  </h3>
                  <h4 className="md:text-h-l font-serif text-h1-s leading-h1-s tracking-[-0.431px] text-dark-pink md:leading-h1-l md:tracking-[-0.431px]">
                    300+
                  </h4>
                </div>
                <hr className="hidden text-blue-grey opacity-25 md:block" />
              </div>
              <div className="text- w-full space-y-4">
                <hr className="hidden text-blue-grey opacity-25 md:block" />
                <div>
                  <h3 className="font-sans text-[16px] leading-body text-blue-grey opacity-70">
                    Offices in the US
                  </h3>
                  <h4 className="md:text-h-l font-serif text-h1-s leading-h1-s tracking-[-0.431px] text-dark-pink md:leading-h1-l md:tracking-[-0.431px]">
                    3
                  </h4>
                </div>
                <hr className="hidden text-blue-grey opacity-25 md:block" />
              </div>
              <div className="w-full space-y-4 text-left">
                <hr className="hidden text-blue-grey opacity-25 md:block" />
                <div>
                  <h3 className="font-sans text-[16px] leading-body text-blue-grey opacity-70">
                    Transactions Analyzed
                  </h3>
                  <h4 className="md:text-h-l font-serif text-h1-s leading-h1-s tracking-[-0.431px] text-dark-pink md:leading-h1-l md:tracking-[-0.431px]">
                    10M+
                  </h4>
                </div>
                <hr className="hidden text-blue-grey opacity-25 md:block" />
              </div>
            </div>
            <hr className="text-blue-grey opacity-25 md:hidden" />
          </div>
          <div className="space-y-12 pt-12 md:space-y-16 md:pt-16 lg:space-y-14 lg:px-[260px]">
            <div className="space-y-4 md:flex md:gap-[10px] md:space-y-0 md:text-left lg:gap-[30px]">
              <h2 className="font-serif text-h4 leading-h4 tracking-[-0.185px] text-blue-grey md:min-w-[223px] md:max-w-[223px] md:text-h3-l md:leading-h3-l  md:tracking-[-0.246px] lg:min-w-[255px] lg:max-w-[255px]">
                Our Business
              </h2>
              <p className="font-sans text-body leading-body text-light-grey">
                We strongly believe there's always an opportunity to learn from
                each other outside of day-to-day work, whether it's company-wide
                offsites, internal hackathons, or co-worker meetups. We always
                value cross-team collaboration and diversity of thought, no
                matter the job title.
              </p>
            </div>
            <div className="space-y-4 md:flex md:gap-[10px] md:space-y-0 md:text-left lg:gap-[30px]">
              <h2 className="font-serif text-h4 leading-h4 tracking-[-0.185px] text-blue-grey md:min-w-[223px] md:max-w-[223px] md:text-h3-l md:leading-h3-l  md:tracking-[-0.246px] lg:min-w-[255px] lg:max-w-[255px]">
                The People
              </h2>
              <p className="font-sans text-body leading-body text-light-grey">
                We're all passionate about building a more efficient and
                inclusive financial infrastructure together. At PayAPI, we have
                diverse backgrounds and skills.
              </p>
            </div>
          </div>
          <ScheduleDemo />
        </div>
      </main>
    </>
  );
};

export default About;

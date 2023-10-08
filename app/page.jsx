import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main>
        {/* Main */}
        <div className="bg-[#EDF3F8]">
          <div className="relative mx-auto flex max-w-[1600px] flex-col gap-6 px-6 pb-20 md:items-center md:gap-12 md:px-10 md:pt-2 lg:flex lg:flex-row-reverse lg:px-40 lg:pt-6">
            <Image
              src="/images/home/desktop/illustration-phone-mockup.svg"
              alt="Phone mockup"
              width={128}
              height={240}
              className="md:height-[300px] z-40 mx-auto md:w-[159px] lg:h-[498px] lg:w-[257px]"
            />
            {/* Mobile Circle */}
            <div className="pointer-events-none absolute left-0 z-30 min-h-screen w-[150%] md:hidden">
              <Image
                src="/images/shared/desktop/bg-pattern-circle.svg"
                alt="Circle"
                width={780}
                height={780}
                className="absolute top-0 w-full translate-x-[-16.5%] translate-y-[-75%] min-[440px]:translate-y-[-85%] md:hidden"
              />
            </div>
            {/* Desktop Circle */}
            <Image
              src="/images/shared/desktop/bg-pattern-circle.svg"
              alt="Circle"
              width={780}
              height={780}
              className="pointer-events-none absolute right-0 top-0 z-10 hidden translate-x-[30%] translate-y-[-45%] lg:block"
            />
            <div className="flex flex-col gap-6 text-center md:items-center md:gap-12 md:text-left lg:items-start">
              <h1 className="text-center font-serif text-h3-l leading-[36px] tracking-[-0.246px] text-blue-grey md:w-[75%] md:text-h2 md:leading-h2 md:tracking-[-0.369px] lg:text-left lg:text-h1-l lg:leading-h1-l lg:tracking-[0.554px]">
                Start building with our APIs for absolutely free.
              </h1>
              <div className="flex w-full flex-col gap-4 md:items-center lg:items-start">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="rounded-full bg-white px-7 py-[15px] font-sans text-body font-bold text-blue-grey shadow-md focus:outline-none md:w-[60%] lg:w-[50%]"
                />
                <button className="rounded-full bg-dark-pink px-2 py-[15px] text-body font-bold tracking-[-0.115px] text-white md:w-[60%] lg:w-[50%]">
                  Schedule a Demo
                </button>
                <div className="text-inherit mt-8 font-sans text-body text-light-grey md:mt-0">
                  <span>Have any questions? </span>
                  <span className="font-bold">Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Credibility */}
        <div className="relative overflow-hidden bg-dark-grey">
          {/* Mobile & Tablet Circle */}
          <div className="pointer-events-none absolute left-0 top-0 h-3 w-[150%] md:w-full lg:hidden lg:w-[150%]">
            <Image
              src="/images/shared/desktop/bg-pattern-circle.svg"
              alt="Circle"
              width={1280}
              height={1280}
              className="absolute bottom-0 left-0 translate-x-[-16.7%] translate-y-[30%] min-[480px]:translate-y-[20%] md:left-1/2 md:h-[780px] md:w-[780px] md:translate-x-[-50%] md:translate-y-[30%]"
            />
          </div>
          <div className="relative mx-auto flex max-w-[1600px] flex-col items-center gap-14 px-6 py-20 md:gap-16 md:px-10 md:py-[88px] lg:flex-row-reverse lg:px-40 lg:py-[100px]">
            {/* Desktop Circle */}
            <Image
              src="/images/shared/desktop/bg-pattern-circle.svg"
              alt="Circle"
              width={780}
              height={780}
              className="pointer-events-none absolute bottom-0 left-0 hidden translate-x-[-30%] translate-y-[-8%] lg:block"
            />
            <div className="grid grid-cols-2 place-items-center gap-8 md:grid-cols-3 md:gap-12 lg:w-[100%]">
              <Image
                src="/images/shared/desktop/tesla.svg"
                alt="Tesla"
                width={131}
                height={17}
              />
              <Image
                src="/images/shared/desktop/microsoft.svg"
                alt="Microsoft"
                width={148}
                height={31}
              />
              <Image
                src="/images/shared/desktop/hewlett-packard.svg"
                alt="Hewlett Packard"
                width={142}
                height={27}
              />
              <Image
                src="/images/shared/desktop/oracle.svg"
                alt="Oracle"
                width={133}
                height={17}
              />
              <Image
                src="/images/shared/desktop/google.svg"
                alt="Google"
                width={97}
                height={33}
              />
              <Image
                src="/images/shared/desktop/nvidia.svg"
                alt="Nvidia"
                width={139}
                height={26}
              />
            </div>
            <div className="space-y-4 text-center md:space-y-6 lg:flex lg:w-[65%] lg:flex-col lg:items-start lg:text-left">
              <h2 className="font-serif text-h3-l leading-[36px] tracking-[-0.246px] text-white md:text-h2 md:leading-h2 md:tracking-[0.369px]">
                Who we work with
              </h2>
              <p className="pb-6 font-sans text-body leading-body text-[#b7bcc0] md:mx-auto md:w-[60%] md:pb-0 lg:mx-0 lg:w-full">
                Today, millions of people around the world have successfully
                connected their accounts to apps they love using our API. We
                provide developers with the tools they need to create easy and
                accessible experiences for their users.
              </p>
              <button className="rounded-full border-[1px] border-solid border-white px-8 py-4 text-center text-body font-bold tracking-[-0.115px] text-white md:mt-2">
                About Us
              </button>
            </div>
          </div>
        </div>
        {/* Advertising */}
        <div className="bg-[#EDF3F8]">
          <div className="bg-inherit mx-auto flex max-w-[1600px] flex-col items-center gap-20 px-6 py-20 md:px-10 lg:gap-28 lg:px-40 lg:py-36">
            <div className="lg:grid lg:grid-cols-2 lg:gap-2">
              <Image
                src="/images/home/desktop/illustration-easy-to-implement.svg"
                alt="Image showing why PayAPI is easy to implement"
                width={328}
                height={281}
                className="mx-auto md:h-[250] md:w-[391px] lg:mx-0 lg:h-[312.4px] lg:w-[489.5px]"
              />
              <div className="mt-12 space-y-6 text-center lg:my-auto lg:text-left">
                <h3 className="font-serif text-[36px] leading-[36px] tracking-[-0.227px] text-blue-grey md:text-h2 md:leading-h2 md:tracking-[-0.369px]">
                  Easy to implement
                </h3>
                <p className="font-sans text-body leading-body text-light-grey md:mx-auto md:w-[75%] lg:mx-0">
                  Our API comes with just a few lines of code. you'll be up and
                  running in no time. We built our documention page to integrate
                  payments functionality with ease.
                </p>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-2">
              <Image
                src="/images/home/desktop/illustration-simple-ui.svg"
                alt="Phone mockup showing the simple UI"
                width={328}
                height={290}
                className="order-2 mx-auto md:h-[320px] md:w-[363px] lg:mx-0 lg:h-[545.7375px] lg:w-full"
              />
              <div className="order-1 mt-12 space-y-6 text-center lg:my-auto lg:text-left">
                <h3 className="font-serif text-[36px] leading-[36px] tracking-[-0.227px] text-blue-grey md:text-h2 md:leading-h2 md:tracking-[-0.369px]">
                  Simple UI & UX
                </h3>
                <p className="font-sans text-body leading-body text-light-grey md:mx-auto md:w-[75%] lg:mx-0">
                  Our pre-built form is easy to integrate in your app or
                  website's checkout flow and designed to optimize conversion.
                </p>
              </div>
            </div>
            <ul className="space-y-12 md:flex md:gap-2 md:space-y-0 lg:max-w-[1200px] lg:gap-4">
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/images/home/desktop/icon-personal-finances.svg"
                  alt="Personal finances icon"
                  width={106}
                  height={106}
                />
                <div className="mt-8 space-y-4">
                  <h5 className="font-sans text-h3-s font-bold leading-h3-s tracking-[-0.138px] text-blue-grey">
                    Personal Finances
                  </h5>
                  <p className="font-sans text-body leading-body text-light-grey">
                    Consolidate financial data from multiple sources and
                    categorize transactions up to 2 years of history. Analyze
                    reports to reconcile activities in your account.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/images/home/desktop/icon-consumer-payments.svg"
                  alt="Consumer payments icon"
                  width={106}
                  height={106}
                />
                <div className="mt-8 space-y-4">
                  <h5 className="font-sans text-h3-s font-bold leading-h3-s tracking-[-0.138px] text-blue-grey">
                    Consumer Payments
                  </h5>
                  <p className="font-sans text-body leading-body text-light-grey">
                    It’s easier to set up secure bank payments with us through a
                    flow designed with the user experience in mind. Customers
                    could instantly authenticate their account.
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center text-center">
                <Image
                  src="/images/home/desktop/icon-banking-and-coverage.svg"
                  alt="Banking & coverage icon"
                  width={106}
                  height={106}
                />
                <div className="mt-8 space-y-4">
                  <h5 className="font-sans text-h3-s font-bold leading-h3-s tracking-[-0.138px] text-blue-grey">
                    Banking & Coverage
                  </h5>
                  <p className="font-sans text-body leading-body text-light-grey">
                    With our platform, you can speed up account onboarding and
                    support ongoing payments for checking, savings, credit card,
                    and brokerage accounts.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex w-full flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between">
              <h6 className="font-serif text-h3-l leading-[36px] tracking-[-0.246px] text-blue-grey md:text-h2 md:leading-h2">
                Ready to start?
              </h6>
              <form>
                {/* Mobile Form */}
                <div className="flex flex-col gap-4 md:hidden md:items-center">
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
                <div className="hidden md:block">
                  <div className="mx-auto flex w-[600px] overflow-hidden rounded-full bg-[#fff] lg:max-w-none">
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

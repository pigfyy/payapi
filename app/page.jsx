import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      {/* Main */}
      <div className="flex flex-col gap-6 px-6 pb-20">
        <Image
          src="/images/home/desktop/illustration-phone-mockup.svg"
          alt="Phone mockup"
          width={128}
          height={240}
          className="mx-auto"
        />
        <h1 className="text-center font-serif text-h3-l leading-[36px] tracking-[-0.246px] text-blue-grey">
          Start building with our APIs for absolutely free.
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter email address"
            className="rounded-full px-7 py-[15px] font-sans text-body font-bold text-blue-grey shadow-md focus:outline-none"
          />
          <button className="rounded-full bg-dark-pink px-2 py-[15px] text-body font-bold tracking-[-0.115px] text-white">
            Schedule a Demo
          </button>
        </div>
        <div className="text-center font-sans text-body text-light-grey">
          <span>Have any questions? </span>
          <span className="font-bold">Contact Us</span>
        </div>
      </div>
      {/* Credibility */}
      <div className="flex flex-col items-center gap-14 bg-dark-grey px-6 py-20">
        <div className="grid grid-cols-2 items-center gap-8">
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
        <div className="space-y-4 text-center">
          <h2 className="font-serif text-h3-l leading-[36px] tracking-[-0.246px] text-white">
            Who we work with
          </h2>
          <p className="font-sans text-body leading-body text-[#b7bcc0]">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
        </div>
        <button className="rounded-full border-[1px] border-solid border-white px-8 py-4 text-center text-body font-bold tracking-[-0.115px] text-white">
          About Us
        </button>
      </div>
      {/* Advertising */}
      <div className="flex flex-col items-center px-6 py-20">
        <Image
          src="/images/home/desktop/illustration-easy-to-implement.svg"
          alt="Image showing why PayAPI is easy to implement"
          width={605}
          height={404}
        />
        <div className="mt-12 space-y-6 text-center">
          <h3 className="font-serif text-[36px] leading-[36px] tracking-[-0.227px] text-blue-grey">
            Easy to implement
          </h3>
          <p className="font-sans text-body leading-body text-light-grey">
            Our API comes with just a few lines of code. you'll be up and
            running in no time. We built our documention page to integrate
            payments functionality with ease.
          </p>
        </div>
        <Image
          src="/images/home/desktop/illustration-simple-ui.svg"
          alt="Phone mockup showing the simple UI"
          width={328}
          height={290}
          className="mt-20"
        />
        <div className="mt-12 space-y-6 text-center">
          <h4 className="font-serif text-[36px] leading-[36px] tracking-[-0.227px] text-blue-grey">
            Simple UI & UX
          </h4>
          <p className="font-sans text-body leading-body text-light-grey">
            Our pre-built form is easy to integrate in your app or website's
            checkout flow and designed to optimize conversion.
          </p>
        </div>
        <div></div>
      </div>
    </main>
  );
}

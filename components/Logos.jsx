import React from "react";
import Image from "next/image";

const Logos = () => {
  return (
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
  );
};

export default Logos;

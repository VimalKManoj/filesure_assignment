import Image from "next/image";
import React from "react";
import FormCard from "./FormCard";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex  md:h-[52rem] w-full sm:flex-col items-center justify-center p-6 md:p-24 bg-[#F2F4F7] overflow-hidden z-10"
    >
      <Image
        src="/background.svg"
        width={624}
        height={1976}
        className="hidden md:block absolute -top-[504px] -right-[70px] -rotate-12"
        alt="background image"
      />

      <section className="w-full h-full mt-20 md:mt-0 md:w-[75rem] text-2xl md:text-4xl md:h-[34rem] flex flex-col justify-between items-start">
        <div className="flex justify-start flex-col z-20">
          <h1 className="font-extrabold font-inter tracking-wide pb-5">
            <span className="text-[#FFBA00]">User-Centric Excellence</span>:
            <br /> <span className="text-[#80A948] font-bold">
              Desun’s
            </span>{" "}
            <span className="font-bold">App Development</span>
            <br />{" "}
            <span className="font-semibold">Tackles Your Pain Points</span>
          </h1>
          <h3 className="hidden md:block text-[18px] leading-6">
            Experience a Seamless Digital Journey with{" "}
            <span className="text-[#80A948] font-bold">Desun</span> - Where
            Every Line
            <br />
            of Code Resolves Your Challenges and
            <span className="text-[#FFBA00] font-bold">
              {" "}
              Elevates Your App Experience
            </span>
            <br /> to Unparalleled Heights.
          </h3>
        </div>
        <div>
          <FormCard />
        </div>
      </section>
    </div>
  );
};

export default Hero;

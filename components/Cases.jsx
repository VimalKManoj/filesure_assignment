import React from "react";
import CategoryList from "./CategoryList";
import Image from "next/image";
import FormCard from "./FormCard";

const categories1 = [
  { name: "Social media", imgSrc: "/project_1.svg" },
  { name: "Fitness and sport", imgSrc: "/project_1.svg" },
  { name: "Bank", imgSrc: "/project_1.svg" },
  { name: "Construction", imgSrc: "/project_1.svg" },
  { name: "Game projects", imgSrc: "/project_1.svg" },
];

const categories2 = [
  { name: "Education", imgSrc: "/project_1.svg" },
  { name: "Auto, transport", imgSrc: "/project_1.svg" },
  { name: "Medicine, health", imgSrc: "/project_1.svg" },
  { name: "Restaurants, food delivery", imgSrc: "/project_1.svg" },
  { name: "Marketplaces", imgSrc: "/project_1.svg" },
];

const categories3 = [
  { name: "AR technology", imgSrc: "/project_1.svg" },
  { name: "TV series", imgSrc: "/project_1.svg" },
  { name: "Startups", imgSrc: "/project_1.svg" },
  { name: "Religion", imgSrc: "/project_1.svg" },
  { name: "Online courses", imgSrc: "/project_1.svg" },
];

const Cases = () => {
  return (
    <>
      <section
        id="cases"
        className=" w-full overflow-hidden z-10 flex justify-around items-center flex-col pt-10 md:pt-36 md:p-18 bg-[#F2F4F7]"
      >
        <div className="w-full md:w-4/5 p-6 md:p-0 md:px-6 flex justify-around items-center flex-col">
          <h3 className="w-full  text-2xl md:text-4xl font-bold pb-10">
            Developed more than <span className="text-[#80A948]">100</span>
            <br /> projects in <span className="text-[#80A948]">15</span>{" "}
            industries
          </h3>
          <div className="w-full flex flex-col md:flex-row  justify-between text-[18px] pb-24">
            <CategoryList categories={categories1} />
            <CategoryList categories={categories2} />
            <CategoryList categories={categories3} />
          </div>

          <h3 className="w-full  text-2xl md:text-4xl font-bold pb-10">
            Projects we are proud of
          </h3>
          <h3 className="w-full text-sm pb-10">
            Our software development company is truly proud of the wonderful
            clients we have
            <br /> worked with. We enjoy a long-term partnership
          </h3>
          <div className=" w-full  h-14 mb-6">
            <div className="flex justify-between w-2/5 transition-all ">
              <h3 className="font-bold p-2 border-b-2 border-[#FFBA00] cursor-pointer">
                Rental
              </h3>
              <h3 className="p-2 hover:border-b-2 hover:border-[#FFBA00] cursor-pointer">
                Funtoo Games
              </h3>
              <h3 className="p-2 hover:border-b-2 hover:border-[#FFBA00] cursor-pointer">
                CRM
              </h3>
              <h3 className="p-2 hover:border-b-2 hover:border-[#FFBA00] cursor-pointer">
                MR Mobile App
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="w-full md:text-4xl font-bold pb-10 pt-10 md:pt-0">
                Rental Management App
              </h3>
              
              <h3 className=" md:w-full text-sm pb-10  ">
                Crafted an innovative rental property management app, seamlessly
                integrating secure login, absence <br className="hidden md:block" />
                registration, and a tenant notice board. Elevating the resident
                experience with user-friendly design and efficient communication
                channels
              </h3>
              <h3 className="w-full text-sm pb-10">
                Business analysis <span className="text-[#FFBA00]">/</span> iOS{" "}
                <span className="text-[#FFBA00]">/</span> Android{" "}
                <span className="text-[#FFBA00]">/</span> QA{" "}
                <span className="text-[#FFBA00]">/</span> UI/UX Design
              </h3>
              <div className="w-full text-sm pb-10 flex items-center">
                <img src="/location.svg" />
                <h2 className="p-2">India</h2> <img src="/location.svg" />
                <h2 className="pr-2">Real Estate</h2>
              </div>

              <div className="w-2/3 text-sm pb-10 flex "></div>
            </div>
            <div className="-mr-[25rem] w-[54rem]">
              <Image src="/mobile.svg" width={446} height={446} className="hidden md:block"  alt="mobile image"/>
              <Image src="/mobile.svg" width={300} height={446} className=" md:hidden" alt="mobile image" />
            </div>
          </div>
        </div>{" "}
      </section>
      <section className="w-full overflow-hidden z-10 flex flex-col md:flex-row justify-around items-center p-6 md:px-28 md:py-10 bg-gradient-to-r from-[#FABC1F] to-[#7CA546]">
        <div className="flex flex-col justify-between h-full">
          <h3 className="md:px-20 w-full text-2xl md:text-4xl font-bold pb-10 text-white">
          Let's discuss<br/>
          Your project
          </h3>
          <h3 className="md:px-20 w-full text-lg pb-10 text-white">
            Let's figure out how to create an effective application,
            <br />
            its cost and terms of its development
          </h3>
        </div>
        <FormCard/>
      </section>
    </>
  );
};

export default Cases;

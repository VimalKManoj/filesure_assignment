import React from "react";
import InfoCard from "./InfoCard";

const cards = [
  {
    iconSrc: "/stages.svg",
    title: "Analysis",
    description:
      "We craft precise technical specs, aligning with your business, technology, and user requirements.",
    number: "1",
  },
  {
    iconSrc: "/stages.svg",
    title: "Design",
    description:
      "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
    number: "2",
  },
  {
    iconSrc: "/stages.svg",
    title: "Development",
    description:
      "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
    number: "3",
  },
];

const cards2 = [
  {
    iconSrc: "/stages.svg",
    title: "Testing",
    description:
      "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions",
    number: "4",
  },
  {
    iconSrc: "/stages.svg",
    title: "Launching",
    description:
      "We design the application page and publish it in the App Store and Google Play stores.",
    number: "5",
  },
  {
    iconSrc: "/stages.svg",
    title: "Support",
    description:
      "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
    number: "6",
  },
];

const Media = () => {
  return (
    <>
      {" "}
      <section
        id="media"
        className="w-full  bg-white overflow-hidden z-10 flex justify-start items-center flex-col md:pt-32 p-6 md:p-44 md:py-24"
      >
        <h3 className=" w-full  text-2xl md:text-4xl font-bold pb-16">
          Application Development Stages
        </h3>
        <div className="w-full flex flex-col md:flex-row justify-around ">
          <div className="flex flex-col items-center">
            {cards.map((card, index) => (
              <InfoCard
                key={index}
                iconSrc={card.iconSrc}
                title={card.title}
                description={card.description}
                number={card.number}
              />
            ))}
          </div>
          <img src="/mobile_2.svg" className="h-full" />
          <div className="flex flex-col items-center">
            {cards2.map((card, index) => (
              <InfoCard
                key={index}
                iconSrc={card.iconSrc}
                title={card.title}
                description={card.description}
                number={card.number}
              />
            ))}
          </div>
        </div>
      </section>
      <section className=" md:h-[35.5rem] w-full  bg-[#F2F4F7] overflow-hidden z-10 flex flex-col md:flex-row justify-between items-center  p-10 md:p-24 ">
        <div className="flex flex-col justify-between h-full w-3/5">
          <h3 className="md:px-20 w-full  text-2xl md:text-4xl font-bold pb-10 text-black">
            Our Project
          </h3>
          <h3 className="md:px-20 w-full text-sm pb-10 text-black">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </h3>
          <div className="flex justify-between flex-col md:flex-row">
            <h3 className="md:px-20  text-2xl md:text-5xl font-bold pb-10 text-black">
              28
            </h3>
            <h3 className="md:px-20   text-2xl md:text-5xl font-bold pb-10 text-black">
              +100
            </h3>
            <h3 className="md:px-20   text-2xl md:text-5xl font-bold pb-10 text-black">
              7 years
            </h3>
          </div>
          <h3 className="md:px-20 w-full text-lg pb-10 text-black">
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It's
            expensive but worth it
          </h3>
        </div>
        <div className="flex justify-between h-full md:w-2/5">
          <img src="/group.png" />
        </div>
      </section>
    </>
  );
};

export default Media;

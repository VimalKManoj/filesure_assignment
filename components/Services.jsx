import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className=" md:h-[52rem] w-full  bg-white overflow-hidden z-10 flex justify-around items-center flex-col pt-20"
    >
      <div className="w-4/5 md:my-12 py-6 md:py-0  border-y-2 h-[500px] md:h-40 flex flex-col  md:flex-row justify-between items-center">
        <img src="/cmpny_logo_1.png" />
        <img src="/cmpny_logo_2.png" />
        <img src="/cmpny_logo_3.png" />
        <img src="/cmpny_logo_4.png" />
        <img src="/cmpny_logo_5.png" />
        <img src="/cmpny_logo_6.png" />
      </div>
      <div className="p-6 md:p-0 md:w-2/3 md:my-12  md:h-[26rem] flex flex-col md:flex-row justify-between">
        <div className="h-full">
          <h3 className=" text-2xl md:text-4xl font-bold pb-3">
            Full development cycle
          </h3>
          <h5 className="font-bold pb-4">We use proven technologies</h5>
          <h3 className="font-bold pb-2">Web</h3>
          <h5 className="pb-4">
            PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/
            <br /> Nuxt / MySQL / Laravel / GO lang / django / Python
          </h5>
          <h3 className="font-bold pb-2">Mobile</h3>
          <h5>
            Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm /
            <br /> Coroutine / RxJava / RxSwift / Unit Test / Navigation
          </h5>
        </div>
        <div className="h-4/5 flex justify-around flex-col mr-36 pt-10 md:pt-0">
          <h3 className="cursor-pointer hover:font-medium w-48">
            iOS development
          </h3>
          <h3 className="cursor-pointer hover:font-medium w-48">
            Android development
          </h3>
          <h3 className="cursor-pointer hover:font-medium w-48">
            Web development
          </h3>
          <h3 className="cursor-pointer hover:font-medium w-48">
            UI/UX design
          </h3>
          <h3 className="cursor-pointer hover:font-medium w-48">Testing</h3>
          <h3 className="cursor-pointer hover:font-medium w-48">Launch</h3>
          <h3 className="cursor-pointer hover:font-medium w-48">
            IT consulting
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Services;

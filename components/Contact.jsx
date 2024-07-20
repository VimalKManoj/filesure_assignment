import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="  w-full  bg-white overflow-hidden z-10 flex flex-col md:flex-row justify-center items-center"
    >
      <div className="w-2/3 bg-[#111111] md:h-64 mb-20 rounded-xl p-6 flex justify-around flex-col items-center">
        <Image src="/logo_black.svg" width={290} height={73} alt="logo"/>
        <div className="w-full flex flex-col md:flex-row jus justify-between md:items-end text-white text-sm pb-2">
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[#98A2B3] font-light flex justify-center items-center p-2"><img src="/phone.svg"/>Contact nums</h2>
            <h2>+91 9987654221</h2>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[#98A2B3] font-light flex justify-center items-center p-2"><img src="/phone.svg"/>Post</h2>
            <h2>+91 9987654221</h2>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[#98A2B3] font-light flex justify-center items-center p-2"><img src="/phone.svg"/>Address</h2>
            <h2>+91 9987654221</h2>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[#98A2B3] font-light flex justify-center items-center p-2"><img src="/phone.svg"/>Leave a request</h2>
            <h2>+91 9987654221</h2>
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-white text-sm">
          We work throughout the world
        </div>
      </div>
    </section>
  );
};

export default Contact;

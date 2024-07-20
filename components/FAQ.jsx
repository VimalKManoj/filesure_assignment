import React from "react";
import { FAQAccordion } from "./FAQAccordion";

const faq = [
  {
    question: "What is the cost of a mobile application?",
    answer:
      "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
  },
  {
    question: "Do you provide a guarantee for the mobile application?",
    answer:
      "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
  },
  {
    question: "How long will development take?",
    answer:
      "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
  },
  {
    question: "I will not tell my idea, do you guarantee confidentiality?",
    answer:
      "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="  w-full  bg-white overflow-hidden z-10 flex flex-col justify-between items-center p-10 py-20  ">
      <div className="w-4/5 flex justify-around items-center flex-col">
        <h3 className="w-full  text-2xl md:text-4xl font-bold pb-10">FAQ</h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {faq.map((card, index) => (
            <FAQAccordion
              key={index}
              question={card.question}
              answer={card.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

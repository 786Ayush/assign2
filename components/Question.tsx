"use client";
import { useState } from "react";
import { carddata6 } from "./Componentdata";

export default function Question() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-[80%] mx-auto my-30">
      {/* Title */}
      <div className="flex items-center justify-between py-8 px-4">
        <div className="flex items-center gap-4">
          <img
            src="/icon4.svg"
            alt="arrow"
            className="w-8 h-8 object-contain"
          />
          <h2
            style={{ fontFamily: "Syne" }}
            className="font-syne text-4xl font-bold"
          >
            Frequently asked questions
          </h2>
        </div>
      </div>

      {/* Accordion */}
      <div className="px-4 mt-10">
        {carddata6.map((card, index) => (
          <div key={card.id} className=" py-4 cursor-pointer">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center"
            >
              <h3
                style={{ fontFamily: "Syne" }}
                className="font-syne font-medium text-[20px] md:text-[32px] md:leading-[40px] tracking-[0%]
"
              >
                {card.question}
              </h3>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>

            {openIndex === index && (
              <div
                style={{ fontFamily: "Poppins" }}
                className="font-poppins font-normal text-[12px] md:text-[18px] leading-[100%] tracking-[0%] text-[#CBCBCB] mt-6 transition-all duration-300 ease-in-out"
              >
                {card.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

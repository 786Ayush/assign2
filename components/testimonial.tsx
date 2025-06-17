"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carddata5 } from "./Componentdata";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carddata5.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === carddata5.length - 1 ? 0 : prevIndex + 1
    );
  };

  const card = carddata5[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <div className="">
      <div className="flex flex-col gap-8 overflow-hidden justify-around h-full mt-20">
        <div className=" flex items-center justify-between ">
          <div className="flex items-center gap-4 ">
            <img
              src="/icon4.svg"
              alt="arrow"
              className="w-8 h-8 object-contain"
            />
            <h2
              style={{ fontFamily: "Syne" }}
              className="font-syne text-4xl font-bold"
            >
              What they say
            </h2>
          </div>
        </div>
        <div className="relative h-full ">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className=" w-full top-0 left-0 md:flex justify-between items-center"
            >
              <div className="flex gap-4  md:w-1/3">
                <img
                  src={card.img}
                  alt="cardimage"
                  className="w-[64px] h-[64px] rounded-full"
                />
                <div>
                  <div
                    style={{ fontFamily: "Syne" }}
                    className="font-syne font-semibold text-[24px] leading-[32px] tracking-[0%]"
                  >
                    {card.name}
                  </div>
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="font-poppins font-normal text-[18px] leading-[100%] tracking-[0%] text-[#CBCBCB]"
                  >
                    {card.company}
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 relative mt-10 pt-20">
                <img
                  src="/quote.svg"
                  alt="quote"
                  className="w-[120px] h-auto object-cover absolute top-0"
                />
                <div
                  style={{ fontFamily: "Syne" }}
                  className="font-syne font-medium text-[20px] md:text-[32px] leading-[40px] tracking-[0%]"
                >
                  {card.title}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 mt-20">
        <button onClick={handlePrevious} className="bg-white p-4 rounded-full">
          <img
            src="/icon6.svg"
            alt="previous"
            className="w-[20px] h-auto object-cover"
          />
        </button>
        <button onClick={handleNext} className="bg-white p-4 rounded-full">
          <img
            src="/icon5.svg"
            alt="next"
            className="w-[20px] h-auto object-cover"
          />
        </button>
      </div>
    </div>
  );
}

"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = ["Webflow", "figma", "designer", "developer"];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [originalWidth, setOriginalWidth] = useState(0);
  const controls = useAnimation();

  // Ref for the original items container (without duplication)
  const originalRef = useRef<HTMLDivElement>(null);

  // Measure the width of the original items only (not duplicated)
  useEffect(() => {
    const updateWidth = () => {
      if (originalRef.current) {
        setOriginalWidth(originalRef.current.scrollWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Start animation once we have the width of original items
  useEffect(() => {
    if (originalWidth === 0) return;

    controls.start({
      x: -originalWidth,
      transition: {
        duration: 20, // Adjust speed here (higher = slower)
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [originalWidth, controls]);


  return (
    <div className="">
      <div className="overflow-hidden bg-black text-white py-6">
        <motion.div
          ref={containerRef}
          animate={controls}
          initial={{ x: 0 }}
          className="flex whitespace-nowrap gap-16"
          style={{ willChange: "transform" }}
        >
          {/* Original items container (measure this width) */}
          <div ref={originalRef} className="flex gap-16">
            {items.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-16 text-xl font-medium min-w-fit"
              >
                <span
                  style={{ fontFamily: "Syne" }}
                  className="font-syne font-bold text-[56px] leading-[88px] tracking-[0%] text-[#CBCBCB] uppercase"
                >
                  {text}
                </span>
                <img
                  src="/icon4.svg"
                  alt="arrow"
                  className="w-6 h-6 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicated items */}
          <div className="flex gap-16 ml-16">
            {items.map((text, i) => (
              <div
                key={i + items.length}
                className="flex items-center gap-16 text-xl font-medium min-w-fit"
              >
                <span
                  style={{ fontFamily: "Syne" }}
                  className="font-syne font-bold text-[56px] leading-[88px] tracking-[0%] text-[#CBCBCB] uppercase"
                >
                  {text}
                </span>
                <img
                  src="/icon4.svg"
                  alt="arrow"
                  className="w-6 h-6 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="text-center my-20">
        <div
          style={{ fontFamily: "Syne" }}
          className="font-syne font-extrabold text-[64px] leading-[80px] tracking-[0%] uppercase "
        >
          LET’S TALK!
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="font-poppins font-normal text-[18px] leading-[100%] tracking-[0%] flex items-center justify-center gap-2"
        >
          rehanurraihan@gmail.com
          <img
            src="/icon8.svg"
            alt="arrow"
            className="w-6 h-6 object-cover p-1"
          />
        </div>
      </div>
      <div className="flex justify-around my-10">
        <div className="">© Rehan Raihan - 2023</div>
        <div className="md:flex gap-4 hidden">
          <div className="">Dribble</div>
          <div className="">Behance</div>
          <div className="">Twitter</div>
          <div className="">Instagram</div>
        </div>
      </div>
    </div>
  );
}

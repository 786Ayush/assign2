import { ToastContainer } from "react-toastify";
import { carddata1, carddata2, carddata3, carddata4 } from "./Componentdata";
import Footer from "./Footer";
import Question from "./Question";
import Testimonial from "./testimonial";
import Header from "./Header";

export default function Hero() {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="">
        <div className="flex flex-col items-center justify-center h-screen ">
          <div
            style={{ fontFamily: "Syne" }}
            className="font-syne font-extrabold text-[20px] md:text-[80px] md:leading-[80px] tracking-[0%] uppercase text-center "
          >
            <div className="">
              {" "}
              I am a{" "}
              <span className=" ">
                <img
                  src="/user1.jpg"
                  alt="designer"
                  className="inline-block w-[45px] md:w-[128px] rounded-full h-[20px] md:h-[64px] object-cover "
                />
              </span>{" "}
              Freelance
            </div>
            <div className="">
              DESIGNER
              <span className="inline-block">
                <img
                  src="/user2.png"
                  alt="designer"
                  className="inline-block w-[45px] md:w-[128px] rounded-full h-[20px] md:h-[64px] object-cover p-2"
                />
              </span>{" "}
              from
            </div>
            <div className="">San Francisco</div>
          </div>
          <div className="md:flex-row flex-col flex  items-center justify-around mt-8 max-w-[95%]">
            <img
              src="/icon1.svg"
              alt="hero"
              className="w-[90px] h-auto object-cover mt-8"
            />
            <img
              src="/icon2.svg"
              alt=""
              className="w-[90px] h-auto object-cover mt-8"
            />
            <img
              src="/icon3.svg"
              alt=""
              className="w-[90px] h-auto object-cover mt-8"
            />
            <div
              style={{ fontFamily: "Poppins" }}
              className="font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] text-[#CBCBCB]  text-center md:text-auto md:max-w-[30%]  mt-8"
            >
              Welcome to my portfolio. Here, artistry meets functionality. Dive
              into a curated showcase of distinctive branding and web designs,
              each crafted to captivate and inspire.
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-black text-white px-4 py-12">
        <div className="max-w-[80%]  mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <img
              src="/icon4.svg"
              alt="arrow"
              className="w-8 h-8 object-contain"
            />
            <h2
              style={{ fontFamily: "Syne" }}
              className="font-syne text-4xl font-bold"
            >
              Expertise
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
            {carddata1.map((card) => (
              <div key={card.id} className="p-6 rounded-2xl ">
                <h3
                  style={{ fontFamily: "Syne" }}
                  className="font-syne text-xl font-semibold mb-3 flex items-center gap-2"
                >
                  <div className="w-[8px] h-[8px] bg-white"></div>
                  <span
                    style={{ fontFamily: "Syne" }}
                    className="font-syne text-xl font-semibold"
                  >
                    {card.title}
                  </span>
                </h3>
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="font-poppins text-base text-[#CBCBCB] leading-relaxed"
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto">
        <div className=" flex items-center justify-between py-8 px-4">
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
              Works
            </h2>
          </div>
          <div className="underline">view all</div>
        </div>
        <div className="flex flex-col gap-8">
          {carddata2.map((card) => (
            <div className="relative overflow-hidden" key={card.id}>
              <div className="absolute bg-[#FF804A] w-[209px] h-[165px] rounded-full z-0 bottom-0 left-1/2 -translate-x-1/2 blur-[100px] "></div>

              <div className="md:flex gap-2 p-4 bg-[#CBCBCB7A] rounded-[40px] relative z-10">
                <div className="md:w-1/2 z-10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-cover rounded-[40px] mb-4"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between px-4 py-4">
                  <div className="">
                    <div
                      style={{ fontFamily: "Syne" }}
                      className="font-syne font-semibold text-[40px] leading-[100%] tracking-[0%]"
                    >
                      {card.title}
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="font-poppins font-normal text-[18px] leading-[100%] tracking-[0%] mt-5"
                    >
                      {card.description}
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black uppercase">
                        {card.bt1}
                      </div>
                      <div className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black uppercase">
                        {card.bt2}
                      </div>
                    </div>
                  </div>
                  <div className="m-2">
                    <div className="px-6 py-2 border border-white rounded-full bg-white text-[#010208] w-fit">
                      View Case Study
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[80%] mx-auto my-20 h-screen ">
        <div className=" flex items-center justify-between py-8 px-4">
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
              Experience
            </h2>
          </div>
        </div>
        <div className="my-10">
          {carddata3.map((card) => (
            <div
              className="flex justify-between border-b-[1.5px] border-white/50 items-center"
              key={`${card.id}`}
            >
              <div
                style={{ fontFamily: "Syne" }}
                className="font-syne font-medium text-[20px] md:text-[32px] leading-[40px] tracking-[0%] p-2"
              >
                {card.title}
              </div>
              <div className="">
                <div
                  style={{ fontFamily: "Syne" }}
                  className="font-syne font-semibold text-[12px] md:text-[24px] leading-[32px] tracking-[0%] text-right p-2"
                >
                  {card.subtitle}
                </div>
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="font-poppins font-normal text-[10px] md:text-[16px] leading-[100%] tracking-[0%] text-right p-2"
                >
                  {card.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[80%] mx-auto">
        <div className=" flex items-center justify-between py-8 px-4">
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
              Blog
            </h2>
          </div>
          <div className="underline">view all</div>
        </div>
        <div className="">
          <div className="flex flex-col gap-4">
            {carddata4.map((card) => (
              <div className="md:flex items-center  gap-4" key={card.id}>
                <div className="md:w-1/3">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-auto object-cover rounded-[40px]"
                  />
                </div>
                <div className="md:w-full p-4 flex flex-col gap-4">
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="font-poppins font-normal text-[10px] md:text-[18px] leading-[100%] tracking-[0%] text-[#CBCBCB]"
                  >
                    {card.date}
                  </div>
                  <div
                    style={{ fontFamily: "Syne" }}
                    className="font-syne font-semibold text-[20] md:text-[40px] leading-[100%] tracking-[0%]"
                  >
                    {card.title}
                  </div>
                  <div className="flex items-center gap-4 mt-5">
                    <div className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black  cursor-pointer">
                      {card.bt1}
                    </div>
                    <div className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black cursor-pointer">
                      {card.bt2}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="px-6 py-2 border border-white rounded-full bg-white text-black w-fit hover:bg-zinc-200 cursor-pointer">
                    Read
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto  h-screen ">
        <Testimonial />
      </div>
      <Question />
      <Footer />
    </>
  );
}

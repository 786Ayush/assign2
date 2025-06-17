"use client";
import { toast } from "react-toastify";

export default function Header() {
  return (
    <div className="bg-black text-white flex justify-around items-center p-4">
      <img
        src="/brand.svg"
        alt="logo"
        className="w-[40px] h-auto object-contain"
      />
      <div className="md:flex gap-4 text-lg items-center hidden ">
        <div className=" px-6 py-2 gap-[10px] rounded-full bg-white text-black text-center">
          Home
        </div>
        <div className=" px-6 py-2 gap-[10px] rounded-full hover:bg-white hover:text-black cursor-pointer" onClick={()=>toast("Page not created yet!")}>
          About
        </div>
        <div className=" px-6 py-2 gap-[10px] rounded-full hover:bg-white hover:text-black cursor-pointer" onClick={()=>toast("Page not created yet!")}>
          Projects
        </div>
        <div className=" px-6 py-2 gap-[10px] rounded-full hover:bg-white hover:text-black cursor-pointer" onClick={()=>toast("Page not created yet!")}>
          Contact
        </div>
      </div>
      <div className="border border-white uppercase px-6 py-2 rounded-full" >
        Hire Me
      </div>
    </div>
  );
}

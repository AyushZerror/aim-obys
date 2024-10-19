import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const footerAnimation = () => {
    var ft = gsap.timeline({
      scrollTrigger: {
        trigger: "#page4",
        scroller: "body",
        start: "top 10%",
        end: "top -30%",
        scrub: 1,
      },
    });

    ft.from(".fst", {
      y: "100%",
      stagger: {
        amount: 0.8,
      },
      duration: 1.5,
    })
      .to(
        ".st8",
        {
          left: "120%",
          duration: 1.5,
        },
        "s"
      )
      .to(
        ".st7",
        {
          left: "89%",
          duration: 1.5,
        },
        "s"
      )
      .to(
        ".st6",
        {
          left: "77.5%",
          rotate: 97,
          duration: 1.5,
        },
        "s"
      )
      .to(
        ".st5",
        {
          left: "65.5%",
          rotate: "-97",
          duration: 1.5,
        },
        "s"
      )
      .to(
        ".st4",
        {
          left: "53.5%",
          duration: 1.5,
        },
        "s"
      )
      .to(
        ".st3",
        {
          left: "39.5%",
          duration: 1.5,
        },
        "s"
      )
      .to(
        ".st2",
        {
          left: "25.5%",
          duration: 1.5,
        },
        "s"
      )
      .to(
        ".st1",
        {
          left: "13%",
          rotate: 99,
          duration: 1.5,
        },
        "s"
      );
  };
  useGSAP(footerAnimation)
  
  return (
    <div
      id="page4"
      className=" w-full h-[40vh] bg-[#E7E4DF] sm:h-[120vh] flex flex-col justify-end p-[5vw] sm:p-[0vw] sm:px-[1vw]"
    >
      <div className="w-full h-[3vw] flex items-center justify-between">
        <h4 className="font-thin sm:text-[1vw] hidden sm:block">
          An AI Experiment Based on the Kharkiv Modernism
        </h4>
        <h4 className="font-thin text-[4vw] mb-[4vw] sm:mb-[0vw] sm:text-[1vw]">
          Obys Agency ©2023
        </h4>
      </div>
      <div className="w-full h-[3vw] bg-[#141414]"></div>
      <div className="w-full h-[25vw] relative">
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st1 bg-[#141414] absolute top-[5%] left-[0%]"></div>
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st2 bg-[#141414] absolute top-[5%] left-[14%]"></div>
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st3 bg-[#141414] absolute top-[5%] left-[28%]"></div>
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st4 bg-[#141414] absolute top-[5%] left-[42%]"></div>
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st5 bg-[#141414] absolute top-[5%] left-[56%]"></div>
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st6 bg-[#141414] absolute top-[5%] left-[70%]"></div>
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st7 bg-[#141414] absolute top-[5%] left-[84%]"></div>
        <div className="w-[11.5vw] sm:w-[12.5vw] h-[22.5vw] fst st8 bg-[#141414] absolute top-[5%] left-[98%]"></div>
      </div>
    </div>
  );
};

export default Page4;

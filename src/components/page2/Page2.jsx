import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)


const Page2 = () => {
    useGSAP(()=>{
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#page2",
                start: "top 40%",
                end: "top -100%",
                scrub: 1,
                // markers:true
            }
        })
        tl2
            .from("#page2 h1", {
                y: "100%",
                stagger: 0.5,
                duration: 1.5
            })
    })
  return (
    <>
    <div id='page2'  className="hidden sm:block w-full min-h-screen pt-[20vw] px-[1vw]">
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">This AI experiment delves into a</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">contemporary reimagining of the Kharkiv</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800 flex">
        <h1 className="text-[5vw] font-semibold leading-none">Modernism <span className="text-[1vw]">[*]</span> movement from 1910 to
        </h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">1930. Drawing inspiration from the</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">garde artists and intellectuals of that era,</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none flex">we employ cutting-edge artificial<span
                className="text-[1vw]">[**]</span></h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">intelligence techniques to reinterpret and</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">garde artists and intellectuals of that era,</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">revive their visionary ideas.</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800 mt-[4vw]">
        <h1 className="text-[5vw] font-semibold leading-none flex">By leveraging modern technology, we <span
                className="text-[1vw]">[***]</span></h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">aim to uncover new perspectives on the</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">artistic, architectural, and cultural legacy</h1>
    </div>
    <div className="h-[5.7vw] overflow-hidden relative z-10  text-zinc-800">
        <h1 className="text-[5vw] font-semibold leading-none">of Kharkiv Modernism.</h1>
    </div>
    <div className="flex gap-[10vw] mt-[10vw]">
        <h4 className="text-[.9vw]">[*] — Collective name 1910-30 Kharkiv’s artists</h4>
        <h4 className="text-[.9vw]">[**] — Main visual AI tool is Midjourney</h4>
        <h4 className="text-[.9vw]">[***] — Experiment produced by Obys</h4>
    </div>
</div>

<div id="page2-mobile" className="block sm:hidden w-full h-[165vh]  p-[5vw] pt-[25vh]">
          <h1 className="text-[9vw] leading-none">This AI experiment delves into a contemporary reimagining of the Kharkiv
              Modernism <sup className="text-xs">[**]</sup> movement from 1910 to
              1930. Drawing inspiration from the
              garde artists and intellectuals of that era,
              we employ cutting-edge artificial
              <sup className="text-xs">[**]</sup>
              intelligence techniques to reinterpret and
              garde artists and intellectuals of that era,
              revive their visionary ideas.
          </h1>
          <h1 className="text-[9vw] leading-none pt-[4vh] mb-[15vw]">By leveraging modern technology, we <sup
                  className="text-xs">[***]</sup>
              aim to uncover new perspectives on the
              artistic, architectural, and cultural legacy
              of Kharkiv Modernism.</h1>
          <h3 className="text-sm mt-[1vw]">[*] — Collective name 1910-30 Kharkiv’s artists</h3>
          <h3 className="text-sm mt-[1vw]">[**] — Main visual AI tool is</h3>
          <h3 className="text-sm mt-[1vw]">[***] — Experiment produced by Obys</h3>
      </div>
    </>
)
}

export default Page2
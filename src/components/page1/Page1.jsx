import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

const Page1 = () => {
  const [isOpen, setisOpen] = useState(false)
  const navigation =  useRef()

  useGSAP(()=>{
    var load = gsap.timeline()
    load
        .to(".strip", {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            stagger: 0.1,
            ease: "power4.in",
            duration: 1
        })
        .to("#loader", {
            y: "-100%",
            duration: .6,
            delay: .5,
            ease: "power2.in",
        }, "a")
        .to(".box", {
            top: `-16.5%`,
            scale: 2.2,
            duration: .8,
            delay: .5,
            ease: "power2.in",
        }, "a")
        .to(".strip", {
            backgroundColor: "#141414",
            duration: .1,
            delay: .8,
        }, "a")
        .to(".box", {
            display: "none",
        }, "s")
        .from(".st", {
            opacity: 0,
            duration: 0.2
        }, "s")

        .to(".i1,.i2", {
            x: "-126%"
        }, "b")
        .to(".i3", {
            x: "-15%"
        }, "b")
        .to(".i4,.i5", {
            x: "-4%"
        }, "b")
        .to(".i6,.i7", {
            x: "115%"
        }, "b")
        .to(".i6,.i7", {
            x: "287%"
        }, "c")
        .to(".i1", {
            rotate: 63
        }, "c")
        .to(".i6", {
            rotate: 55
        }, "c")
        .to(".i5", {
            rotate: -55
        }, "c")
        .to(".black", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }, "c")
        .from(".line1", {
            width: 0
        }, "c")
        .from(".line2", {
            height: 0
        }, "c")
        .from(".text1,.lefttxt,.scrollbtn", {
            opacity: 0
        }, "c")
        .from(".right h1", {
            y: "120%",
            stagger: 0.2
        }, "c")
  })
  useEffect(()=>{
    if(navigation.current){
      if(isOpen){
        var tl = gsap.timeline()
      tl
      .to(navigation.current,{
          clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`
      },'a')
      .from(".menu-txt h4",{
        y:100,
        duration:.7
      },'a')
      .from('.bottm-text',{
        opacity:0,
        duration:1
      },'a')
      }
      else{
        gsap.to(navigation.current,{
          clipPath: `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`
        })
      }
    
    }
  },[isOpen])
  return (
   <>
    <div id="loader" className="w-full h-screen bg-[#141414] fixed top-0 left-0 z-[99] flex items-center justify-center "></div>
    <div ref={navigation} id="navigation" style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}}
        className="sm:hidden bg-[#18181A] text-white/80 flex flex-col justify-between  font-[font] z-50 fixed top-0 left-0 p-[5vw] w-full h-screen">
        <div className="flex flex-col gap-[20vh]">
            <h4 onClick={()=>{
              setisOpen(false)
            }} id="close" className="text-4vw font-semibold">Close</h4>
            <div className="menu-txt">
                <div className="overflow-hidden h-[14vw]">
                    <h4 className="text-[15vw] leading-none text-white/50">Index</h4>
                </div>
                <div className="overflow-hidden h-[14vw]">
                    <h4 className="text-[15vw] leading-none">Experiment</h4>
                </div>
                <div className="overflow-hidden h-[14vw]">
                    <h4 className="text-[15vw] leading-none">About</h4>
                </div>
            </div>
        </div>
        <div className="w-full bottm-text flex flex-col gap-16 border-t border-white">
            <h3>An AI Experiment<br />Based on the Kharkiv Modernism.</h3>
            <h3>Obys Agency ©2023</h3>
        </div>
    </div>
    <div className="box w-[11.30vw] h-[10.3vw] flex mt-[15vw] fixed z-[999] left-1/2 -translate-x-1/2  top-[22%]">
        <div style={{clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'}}
            className="strip  w-[35%] h-full bg-zinc-100 absolute left-0"></div>
        <div style={{clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'}}
            className="strip w-[35%] h-full bg-zinc-100 absolute left-1/2 -translate-x-1/2"></div>
        <div style={{clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'}}
            className="strip w-[35%] h-full bg-zinc-100 absolute right-0"></div>
    </div>
    <div onClick={()=>setisOpen(true)} className="nav  w-full  sm:h-[3vw] font-[font] flex items-center justify-between fixed z-40 px-[1vw] top-[3%]">
        <h4 id="open" className="text-[4vw] block sm:hidden pl-[5vw]">Menu</h4>
    </div>
    <div className="relative w-full h-screen flex flex-col justify-between sm:justify-end pt-[5vw] sm:pt-[0vw] px-[5vw] sm:px-[1vw]">
        <div className="w-[12.5vw] st i1 h-[22.5vw] bg-[#141414] absolute top-[5%] sm:top-[2%] right-[50%] origin-top-left"></div>
        <div className="w-[12.5vw] st i2 h-[22.5vw] bg-[#141414] absolute top-[5%] sm:top-[2%] right-[50%]"></div>
        <div className="w-[12.5vw] st i3 h-[22.5vw] bg-[#141414] absolute top-[5%] sm:top-[2%] right-[50%]"></div>
        <div className="w-[12.5vw] st i4 h-[22.5vw] bg-[#141414] absolute top-[5%] sm:top-[2%] left-[50%]"></div>
        <div className="w-[12.5vw] st i5 h-[22.5vw] bg-[#141414] absolute top-[5%] sm:top-[2%] left-[50%] origin-top-right"></div>
        <div className="w-[12.5vw] st i6 h-[22.5vw] bg-[#141414] absolute top-[5%] sm:top-[2%] left-[50%] origin-top-left"></div>
        <div className="w-[12.5vw] st i7 h-[22.5vw] bg-[#141414] absolute top-[5%] sm:top-[2%] left-[50%]"></div>
        <div style={{clipPath:' polygon(0 0, 100% 0, 100% 0, 0 0)'}} className=" mt-[15vh] sm:mt-[-30vh] black w-full h-[3vw] bg-[#141414]"></div>
        <div className="hidden sm:flex text1 w-full h-[3vw]  items-center justify-between">
          <h4 className="text-[1vw]">AI Modernism of Kharkiv [Ukraine]</h4>
          <h4 className="text-[1vw]">Index / Experiment / About</h4>
          <h4 className="text-[1vw]">[Gallery]</h4>
          <h4 className="text-[1vw]">Obys Agency ©2023</h4>
        </div>
        <div className="w-full h-[40vh] sm:h-[20vw] flex flex-col sm:flex-row relative border-b border-black">
          <div className="line1 w-full h-[1px] absolute bg-zinc-900 top-[60%] sm:top-0 left-0"></div>
          <div className="left w-full sm:w-[32.6%] h-1/2 sm:h-full pb-[.8vw] flex items-end relative">
            <div className="line2 hidden sm:block w-[1px] h-full absolute bg-zinc-900 top-0 right-0"></div>
            <div className="lefttxt flex gap-[12vw]">
              <h5 className="text-[4vw] sm:text-[1vw]">Modernists:</h5>
              <h5 className="text-[4vw] sm:text-[1vw] leading-none">E01: Anatol Petrytskiy <br />
                E02: Vasyl Ermilov <br />
                E03: Oleksandr Khvostenko-Khvostov <br />
                E04: Borys Kosarev <br />
                E05: Vadym Meller</h5>
            </div>

          </div>
          <div className="right w-full sm:w-[67.4%] h-1/2 sm:h-full pt-[12vw] sm:pt-[0vw] sm:pb-[.5vw] pl-[1vw] flex items-start sm:items-end flex-row-reverse sm:flex-row justify-between">
            <div className="w-[65%] sm:w-[80%]">
              <div className="h-[7.5vw] sm:h-[4.7vw] overflow-hidden sm:mb-2">
                <h1 className="text-[8vw] sm:text-[5vw] leading-none">AIM—</h1>
              </div>
              <div className="h-[7.5vw] sm:h-[4.7vw] overflow-hidden sm:mb-2">
                <h1 className="text-[8vw] sm:text-[5vw] leading-none">AI Modernism</h1>
              </div>
              <div className="h-[7.5vw] sm:h-[4.7vw] overflow-hidden sm:mb-2">
                <h1 className="text-[8vw] sm:text-[5vw] leading-none">Of Kharkiv</h1>
              </div>
            </div>
            <div className="scrollbtn cursor-pointer flex gap-2 items-center">
              <h2 className="hidden sm:block font-thin">Scroll to Explore</h2>
              <h2 className="block sm:hidden font-thin h-fit">Explore</h2>
              <svg className="w-[3vw] sm:w-[.7vw]" width="100%" height="100%" viewBox="0 0 11 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.875 11.6055L10.875 6.55588L10.875 4.78156L6.50218 9.15438L6.50218 -1.91142e-07L5.24782 -2.45972e-07L5.24782 9.15438L0.875 4.78156L0.87567 6.55588L5.875 11.6055Z"
                  fill="currentColor"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Page1
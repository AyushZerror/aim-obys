import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {
    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#page3",
                scroller: "body",
                start: "top top",
                end: "top -400%",
                scrub: 2,
                pin: true,
            }
        })
        tl
            .to("#page3 .ig", {
                y: "0%",
                stagger: 0.2,
                duration: 1
            })
            .to(".ig3", {
                x: "20%",
                duration: 2
            }, "a")
            .to(".ig2", {
                x: "120%",
                duration: 2
            }, "a")
            .to(".ig1", {
                x: "200%",
                duration: 2
            }, "a")
            .to(".text2 h1", {
                y: 0,
                stagger: 0.2,
                duration: 1,
                delay: .5
            }, "a")
            .to(".hid", {
                opacity: 1,
                duration: .5,
                delay: -.2
            })
            .to(".ig1 .defl", {
                scale: 1.2,
                duration: 1
            }, "b")
            .to(".ig1 .im-1", {
                y: "0%",
                duration: 1
            }, "b")
            .to("#count", {
                y: "-100%",
                duration: 1
            }, "b")
            .to(".t-1", {
                opacity: .4,
                duration: .3
            }, "b")
            .to(".t-2", {
                opacity: 1,
                duration: .3
            }, "b")
            .to(".ig1 .im-1", {
                scale: 1.2,
                duration: 1
            }, "c")
            .to(".ig1 .im-2", {
                y: "0%",
                duration: 1
            }, "c")
            .to("#count", {
                y: "-200%",
                duration: 1
            }, "c")
            .to(".t-2", {
                opacity: .4,
                duration: .3
            }, "c")
            .to(".t-3", {
                opacity: 1,
                duration: .3
            }, "c")
            .to(".ig1 .im-2", {
                scale: 1.2,
                duration: 1
            }, "d")
            .to(".ig1 .im-3", {
                y: "0%",
                duration: 1
            }, "d")
            .to("#count", {
                y: "-300%",
                duration: 1
            }, "d")
            .to(".t-3", {
                opacity: .4,
                duration: .3
            }, "d")
            .to(".t-4", {
                opacity: 1,
                duration: .3
            }, "d")
            .to(".ig1 .im-3", {
                scale: 1.2,
                duration: 1
            }, "e")
            .to(".ig1 .im-4", {
                y: "0%",
                duration: 1
            }, "e")
            .to("#count", {
                y: "-400%",
                duration: 1
            }, "e")
            .to(".t-4", {
                opacity: .4,
                duration: .3
            }, "e")
            .to(".t-5", {
                opacity: 1,
                duration: .3
            }, "e")
            .to(".ig1 .im-4", {
                scale: 1.2,
                duration: 1
            }, "f")
            .to(".ig1 .im-5", {
                y: "0%",
                duration: 1
            }, "f")
            .to("#count", {
                y: "-500%",
                duration: 1
            }, "f")
            .to(".t-5", {
                opacity: .4,
                duration: .3
            }, "f")
            .to(".t-6", {
                opacity: 1,
                duration: .3
            }, "f")
    })
    return (
        <>
        <div id="page3" className="hidden sm:block w-full h-screen relative">
            <div className="w-[66.6%] h-full absolute flex pt-[3vw] pb-[.5vw] px-[.5vw]">
                <div className="text2 w-[75%] h-full flex flex-col justify-between">
                    <div>
                        <div className="h-[9vw] overflow-hidden">
                            <h1 className="text-[9vw] leading-none translate-y-full">Explore</h1>
                        </div>
                        <div className="h-[9vw] overflow-hidden">
                            <h1 className="text-[9vw] leading-none translate-y-full">Experiment</h1>
                        </div>
                        <div className="learn hid opacity-0  flex justify-between w-[50%] border-t-[.1vw] border-black ml-[.5vw] mt-[4vw] py-[.3vw]">
                            <h4 className="capitalize">learn more</h4>
                            <div className="w-[1vw] flex justify-end overflow-hidden">
                                <i className="ri-arrow-right-line transition-all"></i>
                                <i className="ri-arrow-right-line transition-all"></i>
                            </div>
                        </div>
                    </div>
                    <h4 className="pl-[.5vw]">Kharkiv Modernism × Obys × AI</h4>
                </div>
                <div className="hid opacity-0 w-[25%] h-full pt-[1vw]  flex flex-col justify-between">
                    <h4 className="leading-none text-[1vw] h-[1vw] flex overflow-hidden"><span id="count">
                        <h4>1</h4>
                        <h4>2</h4>
                        <h4>3</h4>
                        <h4>4</h4>
                        <h4>5</h4>
                        <h4>6</h4>
                    </span> — 6</h4>
                    <div className=" flex gap-[2.5vw] leading-none text-[1vw]">
                        <h4>[06] Featured:</h4>
                        <h4>Name: <br /> <br />
                            <span className="opacity-[1] t-1">Suprematista</span> <br />
                            <span className="opacity-[.4] t-2">Buntesglas</span> <br />
                            <span className="opacity-[.4] t-3">Vierensee</span> <br />
                            <span className="opacity-[.4] t-4">Formen</span> <br />
                            <span className="opacity-[.4] t-5">Sesselbaa</span> <br />
                            <span className="opacity-[.4] t-6">Salzfeld</span></h4>
                    </div>
                    <h4 className="leading-none text-[1vw]">©2023</h4>
                </div>
            </div>
            <div className="overlay  pointer-events-none w-full h-full flex absolute top-0 left-0 ">
                <div className="ig ig1 z-20 w-[calc(100%/3)] translate-y-full overflow-hidden relative h-full bg-red-800  bg-cover bg-center">
                        <img
                        className="h-full defl w-full absolute top-0"
                            src="/ig1.webp"
                            alt=""
                        />
                        <img
                        className="h-full im-1 w-full object-cover absolute translate-y-[100%]"
                            src="/ig2.webp"
                            alt=""
                        />
                        <img
                         className="h-full im-2 w-full object-cover absolute translate-y-[100%]"
                            src="/ig3.webp"
                            alt=""
                        />
                        <img
                         className="h-full im-3 w-full object-cover absolute translate-y-[100%]"
                            src="/ig4.webp"
                            alt=""
                        />
                        <img
                        className="h-full im-4 w-full object-cover absolute translate-y-[100%]"
                            src="/ig5.webp"
                            alt=""
                        />
                        <img
                        className="h-full im-5 w-full object-cover absolute translate-y-[100%]"
                            src="/ig6.webp"
                            alt=""
                        />
                </div>
                <div className="ig ig2 z-10 w-[calc(100%/3)] translate-y-full overflow-hidden h-full bg-cover bg-center bg-[url('/img2.webp')]">
                </div>
                <div className="ig ig3 z-0 w-[calc(100%/3)] translate-y-full overflow-hidden h-full bg-cover bg-center bg-[url('/img3.webp')]">
                </div>
            </div>
        </div>
         <div id="page3-mobile" className="relative z-30 bg-[#E7E4DF]  block sm:hidden w-full min-h-screen">
         <img className="w-full h-full"
             src="/ig1.webp"
             alt=""/>
         <img className="w-full h-full"
             src="/ig2.webp"
             alt=""/>
         <img className="w-full h-full"
             src="/ig3.webp"
             alt=""/>
         <div className="w-full min-h-[65vh] p-[5vw] pt-[8.5vh]">
             <h2 className="text-[15vw] leading-none ">Explore </h2>
             <h2 className="text-[15vw] leading-none">Experiment</h2>
             <div className="learn  flex justify-between w-full border-t-[.1vw] border-black  mt-[11vw] py-[1vw]">
                 <h4 className="capitalize">learn more</h4>
                 <div className="w-[5vw] flex justify-end overflow-hidden">
                     <i className=" text-xl ri-arrow-right-line transition-all"></i>
                     <i className=" text-xl ri-arrow-right-line transition-all"></i>
                 </div>
             </div>
             <div className=" flex gap-[8vw] leading-none text-[4vw] mt-[15vh]">
                 <h4>[06] Featured:</h4>
                 <h4>Name: <br /> <br />
                     Suprematista <br />
                     Buntesglas <br />
                     Vierensee <br />
                     Formen <br />
                     Sesselbaa <br />
                     Salzfeld</h4>
             </div>
             <div className="w-full mt-[5vh]">
                 <div className="w-full mt-[5vh]">
                     <img className="w-full h-full"
                         src="/ig4.webp"
                         alt=""/>
                     <h3 className="p-[1vw]">Suprematist</h3>
                 </div>
                 <div className="w-full mt-[5vh]">
                     <img className="w-full h-full"
                         src="/ig5.webp"
                         alt=""/>
                     <h3 className="p-[1vw]">Buntesglas</h3>
                 </div>
                 <div className="w-full mt-[5vh]">
                     <img className="w-full h-full"
                         src="/ig6.webp"
                         alt=""/>
                     <h3 className="p-[1vw]">Vierensee</h3>
                 </div>
                 <div className="w-full mt-[5vh]">
                     <img className="w-full h-full"
                         src="/ig1.webp"
                         alt=""/>
                     <h3 className="p-[1vw]">Formen</h3>
                 </div>
                 <div className="w-full mt-[5vh]">
                     <img className="w-full h-full"
                         src="/img2.webp"
                         alt=""/>
                     <h3 className="p-[1vw]">Sesselbaa</h3>
                 </div>
                 <div className="w-full mt-[5vh]">
                     <img className="w-full h-full"
                         src="/img3.webp"
                         alt="" />
                     <h3 className="p-[1vw]">Salzfeld</h3>
                 </div>
             </div>
         </div>

     </div>
        </>
    )
}

export default Page3
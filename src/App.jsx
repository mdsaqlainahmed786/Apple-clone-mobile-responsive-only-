import React from 'react'
import Carousel from "./Carousel"
import appleLogo from "./assets/Apple.png"
import search from "./assets/Search.svg"
import cart from "./assets/Cart.png"
import mobileAnime from "./assets/Mobileanime.png"
import iphone from "./assets/Iphone.png"
import macPng from "./assets/Mac.png"
import appleEve from "./assets/AppleEve.png"
import iphones from "./assets/Iphones.png"
import m2 from "./assets/M2.jpeg"
import macBooks from "./assets/Macs.png"
import whitelogo from "./assets/Whiteapple.png"
import pods from "./assets/Airpods.png"
import watch from "./assets/Watch.png"
import twoPh from "./assets/Twoph.png"
import logo from "./Breakingnews.jpeg"
import hijack from "./assets/Hijack.png"
import invasion from "./assets/Invasion.png"
import foundation from "./assets/Foundation.png"
import crowded from "./assets/Crowded.png"
function App() {
  const slides=[hijack, invasion,foundation,crowded]
  return (
    <div>
    <div className="flex items-center justify-between bg-white/60 backdrop-filter backdrop-blur-md fixed top-0 z-[9999] w-full">
    <div className="mr-48 ml-1"><img className="h-6" src={appleLogo} alt="png"/></div>
<div className="py-3"><img className="h-5 mt-1" src={search} alt="search"/></div>
<div className=""><img className="h-6" src={cart} alt="basket"/></div>
       <div className="mt-1">
<div className="space-y-2 inline-block pr-2">
  <div className="w-5 h-0.5 bg-black"></div>
  <div className="w-5 h-0.5 bg-black"></div>
</div>
</div>
    </div>
<div className="absolute top-16 w-full">
 <div className="absolute left-4 text-md my-1 mx-6 text-[15px]">Get up to ₹8000.00 instant savings on selected</div><div className="my-7 mx-4 text-[15px]">products with eligible HDFC Bank cards.*<a className="text-blue-500">Shop Now &gt;</a></div>
      </div>
      <div className="absolute top-[130px] w-full h-[470px] bg-[#f2f2f4]">
      <div className="flex font-medium text-[30px] mx-14 py-6">Save on Mac or iPad <p className="absolute top-16 left-28">for university.</p></div>
      <div className="font-normal text-lg mt-3 mx-4">Plus get AirPods with Mac and Apple Pencil <p className="absolute top-32 left-40">with iPad.¹</p><div className="absolute top-40 left-[154px]"><a className="text-blue-500">Shop Now &gt;</a></div></div>
      <div className=""><img className="h-64 mt-12" src={mobileAnime} alt="anime"/></div>
      </div>
      <div className="w-full absolute top-[610px] bg-[#fafafa] h-[470px]">
      <div className="font-medium absolute text-[30px] left-[90px] py-9">MacBook Air 15"</div>
      <div className="absolute top-20 left-16 text-lg">Impressively big. Impossibly thin.</div>
   <a className="text-blue-500 absolute left-28 top-[115px]" href="/">Learn more &gt;</a>
   <a className="text-blue-500 absolute left-60 top-[115px]" href="/">Buy &gt;</a>
   <img className="absolute w-[350px] top-32 left-5" src={macPng} alt="macPng"/>
      </div>
     {/* <img className="h-96" src={logo} alt=""/>*/}
     <div className="w-full absolute top-[1100px]">
     <div className="font-medium absolute text-[30px] left-32">iPhone 14</div>
     <div className="absolute text-lg left-[150px] top-12">Wonderfull.</div>
     </div>
        <a className="text-blue-500 absolute left-28 top-[1185px]" href="/">Learn more &gt;</a>
   <a className="text-blue-500 absolute left-60 top-[1185px]" href="/">Buy &gt;</a>
   <img className="absolute top-[1250px]" src={iphone} alt="Iphone"/>
       <div className="absolute w-full top-[1500px]">
    <img className="absolute" src={appleEve} alt="appleEve.png"/>
    <div className="relative h-44 top-[303px] bg-black"><div className="flex text-white font-medium text-[30px] items-center justify-center w-full">Apple Event</div>
    <div className="relative text-white text-lg mx-16">Watch online on 12 September at <p className="flex items-center justify-center">10:30 PM IST.</p>
    <a className="text-blue-500 relative left-20 -bottom-2" href="/">Learn more &gt;</a>
    </div>
    </div>
    </div>
    <div className="w-full bg-black absolute top-[1990px] h-96">
    <div className="flex text-white font-medium text-[30px] items-center justify-center w-full mt-7">iPhone 14 Pro
    </div>
    <div className="flex items-center justify-center text-white text-lg">Pro.Beyond.</div>
       <a className="text-blue-500 absolute left-28 top-[110px]" href="/">Learn more &gt;</a>
   <a className="text-blue-500 absolute left-56 top-[110px]" href="/">Buy &gt;</a>
   <img className="absolute top-36" src={iphones} alt="iphone.png"/>
    </div>
    <div className="w-full bg-black absolute top-[2500px] h-[470px]">
  <div className="flex items-center justify-center font-medium text-white text-[30px] mt-5">iPad Pro</div>
  <div className="text-white text-lg flex items-center justify-center">Supercharged by <img className="h-8 w-9 ml-1" src={m2} alt="M2"/></div>
         <a className="text-blue-500 absolute left-28 top-[105px]" href="/">Learn more &gt;</a>
   <a className="text-blue-500 absolute left-60 top-[105px]" href="/">Buy &gt;</a>
   <img className="absolute top-40" src={macBooks} alt="MacBooks.png"/>
      </div>
     <div className="absolute w-full top-[2983px] bg-black h-56">
      <div className="mt-10 text-white flex items-center justify-center font-medium text-[30px]"><img className="h-7 w-7 -mt-2" src={whitelogo} alt="whiteApple"/>WATCH</div>
      <div className="text-[15px] flex items-center justify-center text-red-500">
      SERIES 8
      </div>
      <div className="text-white flex items-center justify-center my-2 text-lg">A healthy leap ahead.</div>
   <a className="text-blue-500 absolute left-28 top-[150px] text-lg" href="/">Learn more &gt;</a>
     <a className="text-blue-500 absolute left-60 top-[153px]" href="/">Buy &gt;</a>
     <img className="absolute -bottom-72" src={watch} alt="appleWatch.png"/>
     </div>
     <div className="absolute bg-[#f9f9fb] top-[3505px] h-[400px] w-full">
     <div className="flex items-center justify-center font-medium text-[30px] mt-4"><img className="-mt-1 h-8 w-8" src={appleLogo} alt="apple"/> Trade In</div>
     <div className="flex items-center justify-center text-lg"> Upgrade and save.It's that easy.
     </div>
     <a className="text-blue-500 flex items-center justify-center mt-3" href="/">See what your device is worth &gt;</a>
     <img className="absolute top-44" src={twoPh} alt="phones"/>
     </div>
     <div className="bg-black absolute top-[3935px] w-full h-[400px]">
     <div className="flex items-center justify-center mt-7 text-white font-medium text-[30px]">AirPods Pro</div>
     <div className="flex items-center justify-center text-lg text-white">Rebuild from the sound up.</div> 
     <a className="text-blue-500 absolute left-28 top-[110px]" href="/">Learn more &gt;</a>
   <a className="text-blue-500 absolute left-60 top-[110px]" href="/">Buy &gt;</a>
   <img className="absolute top-32" src={pods} alt=""/>
     </div>
     <div className="absolute max-w-lg top-[4430px] pb-40">
     <Carousel>
     {slides.map((s) => (
     <img className="pl-8 pr-8 mb-4" src={s} />
  ))}
</Carousel>
     </div>
     <div className="absolute top-[5090px] w-full bg-[#f2f2f4] h-[1175px]">
      <div className="text-gray-500 text-[12px] py-4 px-4">*Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. <span className="underline text-gray-700">Click here</span> to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to <span className="underline text-gray-700">Terms and conditions</span> between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</div>
      <div className="px-4 text-[12px] text-gray-500">1. Qualified purchasers can receive promotion savings when they purchase an eligible product with promotion product at a qualifying location. Only one promotion product per eligible product per qualified purchaser. Offer is subject to availability. Subject to terms and conditions <span className="underline text-gray-700">herein.</span></div>
      <div className="text-[12px] text-gray-500 px-4 py-3">A subscription is required for Apple TV+.</div>
        <hr className="mx-4 mt-2 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-6">Shop and Learn</div>
        <div className="text-gray-900 absolute left-[360px] mt-6 text-sm">+</div>
          <hr className="mx-4 mt-14 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">Apple Wallet</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">Account</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">Entertainment</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">Apple Store</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">For Business</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">For Education</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">For Healthcare</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">Apple Values</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
        <div className="text-sm absolute left-1 text-gray-900 px-4 mt-3">About Apple</div>
        <div className="text-gray-900 absolute left-[360px] mt-3 text-sm">+</div>
          <hr className="mx-4 mt-12 h-[0.2px] bg-neutral-50 border-0 dark:bg-gray-700" />
   <div className="text-gray-500 text-[12px] py-4 px-4">More ways to shop: <span className="text-blue-500 underline">Find an Apple Store</span> or <span className="text-blue-500 underline">other retailer</span> near you. Or call 000800 040 1966.</div>
   <p className="text-sm text-gray-600 mx-4">India</p>
   <div className="text-gray-500 text-[12px] pt-4 px-4">Copyright © 2023 Apple Inc. All rights reserved.</div>
   <div className="text-sm absolute left-1 text-gray-700 px-[10px] pt-1">Privacy Policy&ensp;|&ensp; Terms of Use&ensp;|&ensp;Sales Policy&ensp;|&ensp;Legal&ensp;|&ensp;Site Map</div>
     </div>
    </div>
  )
}

export default App

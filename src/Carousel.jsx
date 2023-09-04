import { useState, useEffect } from "react";
import pause from "./assets/Pause.png"
import play from "./assets/Play.png"
export default function Carousel({ 
  children: slides,
  autoSlideInterval = 2000
}) {
  const [curr, setCurr] = useState(0);
  const [autoSlide, setautoSlide] = useState(true);
  const stopSliding = ()=>{
    setautoSlide((prev)=>(!prev))
  }
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
const next = () =>
  setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoSlide) 
    return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="text-3xl -ml-1 text-gray-800">
          <p className="h-5">❮</p>
        </button>
        <button onClick={next} className="text-3xl -mr-1 text-gray-800">
          <p className="h-5">❯</p>
        </button>
      </div>

      <div className="relative overflow-visible -bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-2 h-2 mb-5 bg-black rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
          <button onClick ={stopSliding} className="absolute left-80 -top-2">{autoSlide ? 
          <img className="h-6" src={pause}/>
          : <img className="h-6" src={play}/>}</button>
        </div>
      </div>
    </div>
  );
}
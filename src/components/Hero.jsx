import React from "react"
import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-[140px] overflow-hidden">

      {/* Background Image */}
      <img
        src={assets.hero_bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-[calc(100vh-140px)]">
        <div className="max-w-[1400px] mx-auto px-10 w-full">
          <div className="max-w-xl">
            <h1 className="prata-regular text-[56px] text-white leading-tight">
              New Arrival
            </h1>

            <p className="mt-4 text-lg text-white/90">
              Fresh Drops. Timeless Style
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-white text-black text-sm tracking-wide hover:bg-gray-100 transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero

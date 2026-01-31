import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Categories = () => {
  return (
    <section className="w-full py-16 sm:py-20">

      {/* Section Title */}
      <div className="text-center">
        <Title text1="OUR" text2="CATEGORIES" />
      </div>

      {/* Categories Grid */}
      <div className="
        mt-12
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-5
        gap-y-10
        gap-x-6
        place-items-center
        px-6
      ">

        <CategoryCard img={assets.category_kurti} label="KURTIS" />
        <CategoryCard img={assets.category_lehenga} label="LEHENGA" />
        <CategoryCard img={assets.category_saree} label="SAREES" />
        <CategoryCard img={assets.category_gown} label="GOWNS" />
        <CategoryCard img={assets.category_suit} label="SUITS" />

      </div>
    </section>
  )
}

/* 🔹 Reusable Card */
const CategoryCard = ({ img, label }) => (
  <div className="flex flex-col items-center group cursor-pointer">

    {/* Circle */}
    <div
      className="
        w-28 h-28
        sm:w-32 sm:h-32
        md:w-36 md:h-36
        lg:w-40 lg:h-40
        rounded-full
        overflow-hidden
        border border-[#b64400]
        bg-[#f6c1cc]
        transition
        duration-300
        group-hover:scale-105
      "
    >
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text */}
    <p className="mt-4 text-xs sm:text-sm tracking-widest font-medium">
      {label}
    </p>

  </div>
)

export default Categories

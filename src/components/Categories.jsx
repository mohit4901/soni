const Categories = () => {
  return (
    <section className="w-full py-12 sm:py-20">

      {/* Section Title */}
      <div className="text-center">
        <Title text1="OUR" text2="CATEGORIES" />
      </div>

      {/* Categories Grid */}
      <div className="
        mt-10
        grid
        grid-cols-3        /* 👈 Mobile: 3 in a row */
        sm:grid-cols-3
        md:grid-cols-5
        gap-y-8
        gap-x-4
        place-items-center
        px-4
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
        w-20 h-20          /* 👈 Smaller on mobile */
        sm:w-28 sm:h-28
        md:w-32 md:h-32
        lg:w-36 lg:h-36
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
    <p className="mt-3 text-[10px] sm:text-sm tracking-widest font-medium">
      {label}
    </p>

  </div>
)

export default Categories

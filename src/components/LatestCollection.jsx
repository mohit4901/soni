import React, { useContext, useEffect, useRef, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])
  const scrollRef = useRef(null)

  useEffect(() => {
    setLatestProducts(products.slice(0, 8))
  }, [products])

  /* 🔁 AUTO HORIZONTAL SCROLL (MOBILE ONLY) */
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let scrollAmount = 0

    const interval = setInterval(() => {
      if (window.innerWidth >= 640) return // only mobile

      scrollAmount += 260
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }, 1000) // ⏱️ every 1 second

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full py-20">

      {/* Section Heading */}
      <div className="text-center mb-14">
        <Title text1="OUR" text2="PRODUCTS" />
      </div>

      {/* 🔹 MOBILE: Horizontal Scroll | DESKTOP: Grid */}
      <div
        ref={scrollRef}
        className="
          flex gap-6 px-6
          overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          sm:grid sm:grid-cols-3 md:grid-cols-4
          sm:overflow-visible
          max-w-[1300px] mx-auto
        "
      >
        {latestProducts.map((item, index) => (
          <div key={index} className="snap-start">
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>

    </div>
  )
}

export default LatestCollection

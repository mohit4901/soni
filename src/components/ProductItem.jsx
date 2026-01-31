import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      to={`/product/${id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="
        group
        block
        flex-shrink-0
        w-[75vw] sm:w-full
      "
    >
      {/* Card */}
      <div className="relative rounded-2xl bg-[#f9f4f6] overflow-hidden transition-all duration-300 hover:shadow-xl">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-[260px] sm:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover / Mobile Button */}
          <div
            className="
              absolute inset-0
              flex items-end justify-center pb-6
              opacity-100 sm:opacity-0
              sm:group-hover:opacity-100
              transition
            "
          >
            <button
              type="button"
              className="
                px-6 py-2
                text-xs tracking-wide uppercase
                rounded-full
                bg-[#b64400]
                text-white
                hover:bg-[#9f3b00]
                transition
              "
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 py-4 text-center">
          <p className="text-sm text-gray-700 font-light tracking-wide line-clamp-2">
            {name}
          </p>

          <p className="mt-1 text-sm font-medium text-gray-900">
            {currency}{price}
          </p>
        </div>

      </div>
    </Link>
  )
}

export default ProductItem

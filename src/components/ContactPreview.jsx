import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const ContactPreview = () => {
  return (
    <div className="w-full py-16 sm:py-24">

      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10">

        {/* Top Row: Map + Info */}
        <div className="
          grid grid-cols-1
          md:grid-cols-2
          gap-10 md:gap-12
          mb-14 sm:mb-16
        ">

          {/* Map */}
          <div className="rounded-2xl sm:rounded-[24px] overflow-hidden h-[260px] sm:h-[320px] md:h-[360px]">
            <img
              src={assets.map_placeholder}
              alt="map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-5 sm:gap-6">

            <div className="flex items-center gap-4">
              <img src={assets.contact_icon_phone} alt="" className="w-5 sm:w-6" />
              <p className="text-sm text-gray-700">
                +91 88888 88888
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src={assets.contact_icon_email} alt="" className="w-5 sm:w-6" />
              <p className="text-sm text-gray-700 break-all">
                support@sonimonicoll.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src={assets.contact_icon_location} alt="" className="w-5 sm:w-6" />
              <p className="text-sm text-gray-700">
                Haryana, India
              </p>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-[700px] mx-auto">

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="
                border border-gray-300
                rounded-full
                px-5 sm:px-6
                py-3
                text-sm
                outline-none
                focus:border-[#b64400]
              "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="
                border border-gray-300
                rounded-full
                px-5 sm:px-6
                py-3
                text-sm
                outline-none
                focus:border-[#b64400]
              "
            />
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Your Message"
            rows="5"
            className="
              w-full
              border border-gray-300
              rounded-2xl sm:rounded-[24px]
              px-5 sm:px-6
              py-4
              text-sm
              outline-none
              mb-6
              focus:border-[#b64400]
            "
          ></textarea>

          {/* Button */}
          <div className="text-center">
            <button
              type="button"
              className="
                px-8 sm:px-10
                py-3
                rounded-full
                bg-[#b64400]
                text-white
                text-sm
                hover:bg-[#ff975b]
                transition
              "
            >
              Submit
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactPreview

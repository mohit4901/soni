import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const Videos = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const interval = setInterval(() => {
      container.scrollBy({
        left: 320, // card width + gap
        behavior: 'smooth',
      })

      // reset scroll for infinite feel
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      }
    }, 2000) // ⏱️ every 1 second

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-24 bg-[#f7e9d6] overflow-hidden">

      {/* Title */}
      <div className="text-center mb-14">
        <Title text1="OUR" text2="VIDEOS" />
      </div>

      {/* Auto Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 px-10 overflow-x-auto no-scrollbar scroll-smooth"
      >

        <VideoCard img={assets.video_thumb_1} title="Festive Collection Shoot" />
        <VideoCard img={assets.video_thumb_2} title="Behind the Scenes" />
        <VideoCard img={assets.video_thumb_3} title="Bridal Lookbook" />
        <VideoCard img={assets.video_thumb_4} title="New Arrivals Preview" />

        {/* duplicated for infinite illusion */}
        <VideoCard img={assets.video_thumb_1} title="Festive Collection Shoot" />
        <VideoCard img={assets.video_thumb_2} title="Behind the Scenes" />

      </div>

    </section>
  )
}

/* Video Card */
const VideoCard = ({ img, title }) => (
  <div className="min-w-[300px] flex flex-col items-center">
    <div className="relative w-full h-[260px] rounded-[22px] overflow-hidden">
      <img src={img} alt="" className="w-full h-full object-cover" />
      <PlayButton />
    </div>
    <p className="mt-4 text-sm text-gray-700 text-center">{title}</p>
  </div>
)

/* Play Button */
const PlayButton = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
      <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
    </div>
  </div>
)

export default Videos

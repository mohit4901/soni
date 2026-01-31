import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import AnnouncementBar from './Announcement'

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems
  } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
   
    <div className="w-full ">
       <AnnouncementBar/>

      {/* 🔹 TOP INFO BAR */}
      <div className="hidden sm:flex justify-between items-center px-6 py-2 text-[15px] border-b">
        <p>+91-8888888888 &nbsp; | &nbsp; support@sonimonicoll.com</p>
        <div className="flex items-center gap-4">
          <p>📍 Haryana , India</p>
        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <div className="flex bg-[#f7e9d6] items-center justify-between px-6 py-4 font-medium">

        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-40" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-[13px] tracking-wide text-[#b64400]">
          <NavLink to="/" className="hover:text-black">HOME</NavLink>
          <NavLink to="/collection" className="hover:text-black">CATEGORIES</NavLink>
          <NavLink to="/collection" className="hover:text-black">PRODUCTS</NavLink>
          <NavLink to="/about" className="hover:text-black">ABOUT US</NavLink>
          <NavLink to="/collection" className="hover:text-black">GALLERY</NavLink>
          <NavLink to="/collection" className="hover:text-black">MORE</NavLink>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <img
            onClick={() => { setShowSearch(true); navigate('/collection') }}
            src={assets.search_icon}
            className="w-4 cursor-pointer"
            alt=""
          />

          <div className="group relative">
            <img
              onClick={() => token ? null : navigate('/login')}
              className="w-4 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
            {token && (
              <div className="hidden group-hover:block absolute right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white border text-sm">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                  <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-4 min-w-4" alt="" />
            <p className="absolute -right-2 -bottom-2 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[9px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden "
            alt=""
          />
        </div>
      </div>

      {/* 🔹 MOBILE SIDEBAR (UNCHANGED LOGIC) */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border" to="/collection">CATEGORIES</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-3 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar

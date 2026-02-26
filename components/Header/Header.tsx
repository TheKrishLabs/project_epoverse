"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaSun,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

const Header:React.FC = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
const [selectedLang, setSelectedLang] = useState("English");
const dropdownRef=useRef<HTMLDivElement>(null)

// Close dropdown when clicking outside
useEffect(()=>{
    const handleClickOuside=(event:MouseEvent)=>{
        if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
            setIsLangOpen(false)
        }
        
    }
    document.addEventListener('mousedown',handleClickOuside)
        return()=>{
            document.removeEventListener('mousedown',handleClickOuside)
        }
},[])

const handleLandSelected=(lang:string)=>{
    setSelectedLang(lang)
    setIsLangOpen(false)
}
  return (
    <>

      {/* ================= TOP BAR ================= */}
      <div className="bg-gray-100 border-b text-sm">
        <div className="w-full flex items-center justify-between py-2 px-12">

          {/* Left - Date */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaClock className="text-gray-500 text-xs" />
            <span>Thursday, 26 February 2026</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-gray-700">
            <a href="#" className="hover:text-black">Login</a>
            <span>|</span>
            <a href="#" className="hover:text-black">Registration</a>

            {/* Theme Icon */}
            <FaSun size={20} className="text-orange-500 cursor-pointer shadow rounded-xl" />

            {/* Language */}
            
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 border px-3 py-1 rounded-full text-xs cursor-pointer bg-white hover:bg-gray-50"
              >
                <FaGlobe />
                <span>{selectedLang}</span>
              </div>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg text-sm z-50">
                  <div
                    onClick={() => handleLandSelected("English")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    English
                  </div>
                  <div
                    onClick={() => handleLandSelected("Telugu")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Telugu
                  </div>
                </div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-2">
              <div className="bg-blue-600 text-white p-2 rounded-full text-xs cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="bg-sky-400 text-white p-2 rounded-full text-xs cursor-pointer">
                <FaTwitter />
              </div>
              <div className="bg-pink-500 text-white p-2 rounded-full text-xs cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-red-600 text-white p-2 rounded-full text-xs cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LOGO + AD SECTION ================= */}
      <div className="bg-white">
        <div className="w-full flex items-center justify-between py-3 px-10">

          {/* Logo */}
          <div className="text-6xl font-bold">
            <span className="text-black">Epo</span>
            <span className="text-red-600">Verse.</span>
          </div>

          {/* Ad Banner */}
          <div className="bg-gray-300 w-[771px] h-[90px] flex items-center justify-center text-gray-500 text-2xl font-semibold">
            Banner
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="sticky top-0 z-50 bg-black">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">

          {/* Menu */}
          <ul className="flex items-center gap-6 text-white text-sm font-medium py-4">
            {[
              "HOME",
              "INTERNATIONAL",
              "INVESTING",
              "FINANCE",
              "SPORTS",
              "ENTERTAINMENT",
              "HEALTH",
              "TECHNOLOGY",
              "MORE",
            ].map((item, index:number) => (
              <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-red-500">
                {item}
                <span className="text-gray-400">›</span>
              </li>
            ))}
          </ul>

          {/* Search */}
          <div className="bg-gray-800 p-3 rounded-full text-white cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
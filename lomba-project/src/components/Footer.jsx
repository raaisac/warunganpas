import React from 'react'
import toko from "../assets/logo 2.png";
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="text-white py-8 px-6 ">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
      {/* Logo dan Deskripsi */}
      <div className="text-center sm:text-left">
        <img src={toko} alt="Logo" className="mb-4 mx-auto sm:mx-0 w-20 h-20" />
        <h1 className="text-2xl font-bold">Angkringan</h1>
        <h1 className="text-yellow-400 text-3xl font-bold font-AnakArsitek">
          Pasadena
        </h1>
        <p className="text-gray-400 mt-2">
          Menyediakan Angkringan yang murah dan nyaman
        </p>
      </div>

      {/* Media Sosial */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
        <a href="https://www.tiktok.com/@nathanwleowle" target="_blank" rel="noopener noreferrer" className='hover:scale-105 bg-white rounded-md duration-300'>
        <img src="https://img.icons8.com/?size=30&id=118638&format=png&color=000000" />
    </a>
    <a href="https://www.instagram.com/nathansigmaskibidi/" target="_blank" rel="noopener noreferrer" className='hover:scale-105 bg-white rounded-md duration-300'>
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
        </div>
      </div>

      {/* Kontak */}
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p className="flex items-center justify-center sm:justify-start text-gray-400">
          <i className="bx bxs-envelope mr-2"></i> warunganpas@gmail.com
        </p>
        <p className="flex items-center justify-center sm:justify-start text-gray-400 mt-2">
          <i className="bx bxs-phone mr-2"></i> +62 696-696-696
        </p>
      </div>
    </div>

    <hr className="border-t border-yellow-400 my-6" />
    <p className="text-center sm:text-start text-gray-500 text-sm">
      © 2024 Angkringan Pasadena Inc. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer
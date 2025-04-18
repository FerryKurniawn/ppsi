import React from "react";

export default function Navbar() {
  return (
<nav className="w-full bg-white shadow px-6 py-4 flex justify-end items-center">
<div className="relative group">
  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
    Admin TU 1
  </button>
  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-10">
    <ul>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Keluar</li>
    </ul>
  </div>
</div>
</nav> )}
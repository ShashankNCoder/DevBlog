import React from 'react'

function Logo() {
  return (
    <div className="font-['Montserrat'] font-bold text-2xl tracking-tight text-white hover:text-white/90 transition-colors duration-200">
      <img src="../../../public/logo.svg" alt="Logo" className="h-8 w-9 mr-2 inline-block -mt-1" />
      <span className="text-blue-400">Dev</span>Blog
    </div>
  )
}

export default Logo
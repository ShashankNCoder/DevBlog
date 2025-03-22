import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="font-['Montserrat'] font-bold text-2xl tracking-tight text-white hover:text-white/90 transition-colors duration-200">
      <span className="text-blue-300">Dev</span>Blog
    </div>
  )
}

export default Logo
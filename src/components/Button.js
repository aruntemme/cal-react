import React from 'react'

function Button({ value, color }) {
  return (
    <button className={`border-1 rounded-xl mx-auto border-black bg-${color}-300 h-16 w-full hover:opacity-50`}>{value}</button>
  )
}

export default Button

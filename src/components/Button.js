import React from "react"

function Button({ value, span, color, onClick }) {
  return (
    <button className={`border-2 shadow-md rounded-xl mx-auto border-black bg-${color}-300 h-16 w-full text-xl hover:opacity-50 ${span ? span : ""}`}  onClick={() => onClick(value)} >{value}</button>
  )
}

export default Button

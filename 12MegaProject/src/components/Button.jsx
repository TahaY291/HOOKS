import React from 'react'

function Button({ children,
    type = "button",
    bgColor = "bg-blue-600",
    textClr = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textClr} ${className} `} {...props} >
            {children}
        </button>
    )
}

export default Button

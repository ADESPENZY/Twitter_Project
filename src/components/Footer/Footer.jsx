import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-20 bg-white shadow-lg rounded-lg w-full">
        <h3 className="text-2xl font-bold text-gray-800">Stay Updated</h3>
        <p className="text-gray-600 mt-2 text-center">
            Get the latest Eco-Living tips and property updates.
        </p>
        <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
            <button 
                className="bg-green-800 text-white px-6 py-2 rounded-4xl font-semibold shadow-md hover:bg-green-700 transition duration-300"
            >
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default Footer
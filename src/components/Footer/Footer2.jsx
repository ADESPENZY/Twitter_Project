import React from 'react'

const Footer2 = () => {
  return (
    <div className='bg-black py-20 text-white'>
        <div className='w-[80%] mx-auto'>
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-2 gap-5 ">
                <div className='flex items-center space-x-2'>
                    <div className="w-10 h-10 bg-green-800 flex items-center justify-center rounded-full">
                        <i className="fa-solid fa-house text-white text-lg"></i>
                    </div>
                    <span className="text-xl font-bold hover:text-green-900 ">EcoEstates</span>
                </div>
                <ul className="flex gap-8 text-xl font-semibold">
                    <li className="hover:text-green-900 transition duration-300 cursor-pointer">Properties</li>
                    <li className="hover:text-green-900 transition duration-300 cursor-pointer">About</li>
                    <li className="hover:text-green-900 transition duration-300 cursor-pointer">Contact</li>
                </ul>

                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-green-800 transition duration-300">
                        <i className="fab fa-twitter text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-green-800 transition duration-300">
                        <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-green-800 transition duration-300">
                        <i className="fab fa-facebook text-lg"></i>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-white hover:bg-white hover:text-green-800 transition duration-300">
                        <i className="fab fa-github text-lg"></i>
                    </a>
                </div>
            </div>
            <div className='border-2 w-full my-10'></div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-sm'>&copy; 2025 EcoEstates . All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer2
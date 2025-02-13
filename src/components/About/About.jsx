import React from 'react'
import AboutImg from '../../assets/testimonial_2.jpg'

const About = () => {
  return (
    <div className='about mt-24 mb-10 w-[80%] mx-auto'>
        <div className=''>
            <h1 className='text-center text-4xl md:text-8xl font-bold'>HOW IT WORKS?</h1>
            <div className="relative z-10 space-y-5 -mt-2 md:-mt-5">
                <div className="p-7 bg-white rounded-2xl shadow-md shadow-green-800 cursor-pointer">
                    <div className="flex justify-between items-center">
                        <h3 className="mb-4 font-bold text-xl">Browse</h3>
                        <h2 className="bg-green-200 inline-block p-2 font-bold rounded-full">01</h2>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row mt-7 space-y-3 md:space-y-0">
                        <p className="text-xs md:text-xl md:max-w-2xl text-gray-400">
                            Explore our career collection of Sustainable luxury homes from the comfort of your device. Use our interactive Platforms to filter property by eco-features, price or location. Dive into 360&deg; virtual tours, detailed Sustainability reports, and energy Efficiency ratings to find a home that aligns with your values and your lifestyle.
                        </p>
                        <div>
                            <img src={AboutImg} alt="About Us" className="w-full md:w-40 md:h-40 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="p-7 bg-white rounded-2xl shadow-md shadow-green-800 group cursor-pointer">
                    <div className="flex justify-between items-center">
                        <h3 className="mb-4 font-bold text-xl">Visit</h3>
                        <h2 className="bg-green-200 inline-block p-2 font-bold rounded-full">02</h2>
                    </div>
                    <div className="mt-7 flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 group-hover:flex md:hidden">
                        <p className="text-xs md:text-xl md:max-w-2xl text-gray-400">
                            Explore our career collection of Sustainable luxury homes from the comfort of your device. Use our interactive Platforms to filter property by eco-features, price or location. Dive into 360&deg; virtual tours, detailed Sustainability reports, and energy Efficiency ratings to find a home that aligns with your values and your lifestyle.
                        </p>
                        <div>
                            <img src={AboutImg} alt="About Us" className="w-full md:w-40 md:h-40 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="p-7 bg-white rounded-2xl shadow-md shadow-green-800 group cursor-pointer">
                    <div className="flex justify-between items-center">
                        <h3 className="mb-4 font-bold text-xl">Schedule</h3>
                        <h2 className="bg-green-200 inline-block p-2 font-bold rounded-full">03</h2>
                    </div>
                    <div className="mt-7 flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 group-hover:flex md:hidden">
                        <p className="text-xs md:text-xl md:max-w-2xl text-gray-400">
                            Explore our career collection of Sustainable luxury homes from the comfort of your device. Use our interactive Platforms to filter property by eco-features, price or location. Dive into 360&deg; virtual tours, detailed Sustainability reports, and energy Efficiency ratings to find a home that aligns with your values and your lifestyle.
                        </p>
                        <div>
                            <img src={AboutImg} alt="About Us" className="w-full md:w-40 md:h-40 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                <div className="p-7 bg-white rounded-2xl shadow-md shadow-green-800 group cursor-pointer">
                    <div className="flex justify-between items-center">
                        <h3 className="mb-4 font-bold text-xl">Move In</h3>
                        <h2 className="bg-green-200 inline-block p-2 font-bold rounded-full">04</h2>
                    </div>
                    <div className="mt-7 flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 group-hover:flex md:hidden">
                        <p className="text-xs md:text-xl md:max-w-2xl text-gray-400">
                            Explore our career collection of Sustainable luxury homes from the comfort of your device. Use our interactive Platforms to filter property by eco-features, price or location. Dive into 360&deg; virtual tours, detailed Sustainability reports, and energy Efficiency ratings to find a home that aligns with your values and your lifestyle.
                        </p>
                        <div>
                            <img src={AboutImg} alt="About Us" className="w-full md:w-40 md:h-40 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
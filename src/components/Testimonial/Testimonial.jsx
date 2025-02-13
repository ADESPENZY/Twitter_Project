import React from 'react';
import data from './Testimonial.json';  // Importing the JSON data

const Testimonial = () => {
  return (
    <div className='mt-24 mb-10 w-[80%] mx-auto'>
        <div className="mb-6 flex flex-col items-end">
            {/* Title aligned to the right */}
            <h2 className="md:text-3xl text-2xl font-semibold">{data.title}</h2>

            {/* Line and Circle aligned to the right */}
            <div className="flex items-center w-full justify-end">
                {/* Circle with Arrow */}
                <div className=" w-10 h-10 rounded-full border-2 flex items-center justify-center">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>

                {/* Right Line (Make sure it fills the space) */}
                <div className="w-[80%] md:w-1/3 border-2"></div>
            </div>
            <div className='text-end'>
                {data.subtitle.map((text, index) => (
                  <h2 key={index} className='md:text-xl text-sm font-normal'>{text}</h2>
                ))}
            </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
            {data.cards.map(card => (
              <div key={card.id} className='bg-white rounded-2xl p-4 flex-1 shadow-green-800 shadow-md transition-transform duration-300 hover:-translate-y-2'>
                <div className='bg-green-200 p-5 rounded-full inline-block'>
                  <i className={`fa-solid fa-leaf text-green-600 text-2xl`}></i>
                </div>
                <div>
                  <h2 className='my-4 text-xl font-bold'>{card.title}</h2>
                  <p className='text-gray-400'>{card.description}</p>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}

export default Testimonial;

import React, { useState, useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Testi1 from '../../assets/testimonial_1.jpg';
import Testi2 from '../../assets/testimonial_2.jpg';
import Testi3 from '../../assets/testimonial_3.jpg';
import Testi4 from '../../assets/testimonial_4.jpg';
import Testi5 from '../../assets/testimonial_5.jpg';
import Testi6 from '../../assets/testimonial_6.jpg';
import Testi7 from '../../assets/testimonial_7.jpg';
import Testi8 from '../../assets/testimonial_8.jpg';

const testimonials = [
    { img: Testi1, name: 'Atoyebi Joshua' },
    { img: Testi2, name: 'Atoyebi James' },
    { img: Testi3, name: 'Atoyebi Janet' },
    { img: Testi4, name: 'Atoyebi Juliet' },
    { img: Testi5, name: 'Jah Grant' },
    { img: Testi6, name: 'Andrew Wey' },
    { img: Testi7, name: 'Chris. Slay' },
    { img: Testi8, name: 'Paul Norton' },
];

const Client = () => {
    const [index, setIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(window.innerWidth >= 768 ? 4 : 1);
    const sliderRef = useRef();
    const cardCount = testimonials.length;

    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(window.innerWidth >= 768 ? 4 : 1);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const moveBy = visibleCards;

    const slideForward = () => {
        setIndex((prev) => (prev + moveBy) % cardCount);
    };

    const slideBackward = () => {
        setIndex((prev) => (prev - moveBy + cardCount) % cardCount);
    };

    useEffect(() => {
        const interval = setInterval(slideForward, 3000);
        return () => clearInterval(interval);
    }, [moveBy]);

    return (
        <div className='relative w-[80%] mx-auto mt-15'>
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold">What Our Client Says</h2>
                <div className="flex items-center">
                    <div className="border border-gray-400 md:w-1/3 w-[80%] "></div>
                    <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
                        <i className="fa-solid fa-arrow-right text-gray-400"></i>
                    </div>
                </div>
            </div>

            <div className='relative overflow-hidden'>
                <div 
                    className='flex transition-transform duration-500' 
                    style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
                >
                    {testimonials.map((testi, i) => (
                        <div key={i} className={`px-3 flex-shrink-0`} style={{ width: `${100 / visibleCards}%` }}>
                            <div className='bg-white p-4 rounded-2xl rounded-br-[80px] shadow-md shadow-green-800'>
                                <p className='text-xl font-normal'>Amazing Experience With EcoEstates. They made finding our Sustainable Home easy!</p>
                                <div className='flex items-center space-x-5 mt-4'>
                                    <img src={testi.img} className='h-10 w-10 rounded-full' alt={testi.name} />
                                    <div>
                                        <h2 className='font-bold'>{testi.name}</h2>
                                        <h2 className='font-bold text-green-800'>Home Owner</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button 
                    onClick={slideBackward} 
                    className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 shadow-md rounded-full'
                >
                    <FaArrowLeft />
                </button>
                <button 
                    onClick={slideForward} 
                    className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 shadow-md rounded-full'
                >
                    <FaArrowRight />
                </button>
            </div>
            <div className='flex justify-center mt-4 space-x-2'>
                {Array.from({ length: Math.ceil(cardCount / moveBy) }).map((_, idx) => (
                    <div key={idx} className={`w-3 h-3 rounded-full ${idx === Math.floor(index / moveBy) ? 'bg-green-800' : 'bg-gray-400'}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Client;

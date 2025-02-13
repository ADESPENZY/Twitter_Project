import React from 'react'
import { useState } from 'react';
import msg_icon from '../../assets/msg_icon.avif';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/movjnyjv", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: data,
            });

            if (response.ok) {
                setStatus("Thanks for your message! We will get back to you soon.");
                form.reset(); // Clear the form after successful submission
            } else {
                setStatus("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("Oops! There was a problem submitting your form.");
        }
    };
    
  return (
    <div className='contact mt-15 mb-10 w-[80%] mx-auto'>
        <div className="mb-6 flex flex-col items-end">
            {/* Title aligned to the right */}
            <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>

            {/* Line and Circle aligned to the right */}
            <div className="relative flex items-center w-full justify-end">
                {/* Circle with Arrow */}
                <div className="relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center">
                  <i className="fa-solid fa-arrow-left"></i>
                </div>

                {/* Right Line (Make sure it fills the space) */}
                <div className="w-[50%] md:w-1/3 border-2"></div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between space-y-8 '>
            <div className='md:w-1/3 w-full space-y-3'>
                <h3 className="text-2xl font-bold flex items-center space-x-2">
                    Send Us A Message 
                    <img src={msg_icon} alt="Message Icon" className="h-8 w-8" />
                </h3>
                <p className="text-gray-700 leading-relaxed ">
                    Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to
                    us as we strive to provide exceptional service to our community.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                        <img src={mail_icon} alt="Mail Icon" className="h-6 w-6" />
                        <span className="font-medium text-gray-800">Contact@JoshTheWiz.dev</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img src={phone_icon} alt="Phone Icon" className="h-6 w-6" />
                        <span className="font-medium text-gray-800">+1 832 987-7890</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <img src={location_icon} alt="Location Icon" className="h-6 w-6" />
                        <span className="font-medium text-gray-800">77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</span>
                    </li>
                </ul>
            </div>
            <div className='md:w-1/2 w-full rounded-lg shadow-md md:p-6 p-2'>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium">Your Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter Your Name" 
                            required 
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-green-800 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium">Phone Number</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Enter Your Mobile Number" 
                            required 
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-green-800 focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium">Write Your Messages Here</label>
                        <textarea 
                            name="message" 
                            rows="4" 
                            placeholder="Enter Your Message" 
                            required 
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-green-800 focus:outline-none"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-green-800 text-white py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300"
                    >
                        Submit Here
                    </button>
                    {status && <p className="text-center text-teal-700 font-semibold mt-3">{status}</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact


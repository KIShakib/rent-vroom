import React from 'react';

const Footer = () => {
    return (
        <div className=" bg-cyan-500 text-cyan-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <div className="py-6">
                <div className="text-center">
                    <h3 className="text-3xl mb-3 tracking-widest font-bold"> RENT VROOM </h3>
                    <p> Need Car? Book from us. </p>
                    <div className="flex justify-center my-10">
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt=' ' />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Google Play Store </p>
                            </div>
                        </div>
                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt=' ' />
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Download on </p>
                                <p className="text-sm md:text-base"> Apple Store </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className='flex gap-x-10'>
                        <p className="order-2 md:order-1 font-bold text-cyan-900"> &copy; Rent Vroom, 2023. </p>
                        <div className="order-1 md:order-2">
                            <span className="px-2">About us</span>
                            <span className="px-2 border-l">Contact us</span>
                            <span className="px-2 border-l">Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
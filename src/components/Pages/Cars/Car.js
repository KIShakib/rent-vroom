import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../../../assets/circle-scatter-haikei.svg";
import "./Car.css"

const Car = ({ car }) => {
    const { vehicleNumber, model, capacity, rentPerDay, images, availability } = car;
    return (
        <div className="p-2 bg-cyan-300">
            <div className='relative overflow-hidden transition duration-700 transform hover:-translate-y-2 hover:shadow-2xl'>
                <img
                    className='w-full h-56'
                    src={images}
                    alt=''
                />
                <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black text-cyan-300 bg-opacity-75 opacity-0 hover:opacity-100'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className='text-xl tracking-wide font-extrabold'>{model}</h3>
                    <h3 className='text-lg tracking-wide'>Seat Capacity: {capacity}</h3>
                    <h4 className='tracking-wide'>Rent Per Day: <strong className='font-semibold italic'>{rentPerDay}</strong> IR</h4>
                </div>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <h3 className='text-lg font-bold'>{model}</h3>
                <Link to={`/car-details/${vehicleNumber}`} className={`relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-gray-50 group ${!availability && "pointer-events-none opacity-50"}`}>
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-400 ease-in-out group-hover:text-white">BOOK NOW</span>
                </Link>
            </div>
        </ div>
    );
};

export default Car;
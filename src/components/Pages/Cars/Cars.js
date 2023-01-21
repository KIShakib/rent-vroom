import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../../features/cars/carsSlice';
import Car from './Car';

const Cars = () => {
    const { cars, error, isLoading } = useSelector(state => state.cars);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCars())
    }, []);



    return (
        <div>
            <div className='my-8'>
                <h1 className='text-center font-extrabold lg:text-4xl text-cyan-500' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Available For Rent...</h1>
            </div>
            <div className='flex justify-center items-center'>
                {
                    isLoading && <div className='flex'>
                        <div className='w-16 h-16 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                            <div className='w-14 h-14 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                                <div className='w-12 h-12 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                                    <div className='w-10 h-10 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                                        <div className='w-8 h-8 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                                            <div className='w-6 h-6 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'>
                                                <div className='w-4 h-4 border-[2px] border-dotted border-cyan-400 rounded-full animate-spin'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {
                    cars?.map((car, i) => <Car key={i} car={car} />)
                }
            </div>
        </div>
    );
};

export default Cars;
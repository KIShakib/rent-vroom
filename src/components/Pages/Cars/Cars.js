import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Car from './Car';

const Cars = () => {
    // const [cars, setCars] = useState([]);

    const { data = {}, isLoading, refetch } = useQuery({
        queryKey: ["/cars"],
        queryFn: () => fetch("data.json")
            .then(res => res.json())
    })


    return (
        <div>
            <div className='my-5'>
                <h1 className='text-center font-extrabold text-3xl' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Available For Rent...</h1>
            </div>
            <div className='flex justify-center items-center'>
                {
                    isLoading && <div className='w-10 h-10 border-4 border-dotted rounded-full animate-spin'></div>
                }
            </div>
            <div className='lg:grid grid-cols-2 gap-4'>
                {
                    data?.cars?.map((car, i) => <Car key={i} car={car} />)
                }
            </div>
        </div>
    );
};

export default Cars;
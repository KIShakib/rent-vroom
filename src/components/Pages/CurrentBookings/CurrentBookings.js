import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from '../../Context/useContext';
import useDynamicTitle from '../../Hooks/useDynamicTitle';

const CurrentBookings = () => {

    useDynamicTitle("Your Bookings")
    
    const { bookings } = useContext(UseContext);
    return (
        <div className='mt-14 h-screen'>
            <h3 className='text-center font-bold text-2xl text-cyan-500'>Your Bookings</h3>
            {
                bookings?.length > 0 ?
                    <div className='flex flex-col gap-y-8 items-center mt-8 lg:w-[60%] mx-auto font-semibold'>
                        {
                            bookings?.map(booking => {
                                return <div className='flex gap-x-10 bg-cyan-200 p-5 rounded w-full justify-center'>
                                    <h3>{booking.model}</h3>
                                    <h5>Total Day: {booking.totalDay}</h5>
                                    <h5>Total Amount: {booking.totalAmount}</h5>
                                </div>
                            })
                        }
                    </div>
                    :
                    <div>
                        <h3 className='text-center font-semibold my-5'>You haven't any booking yet. Please <Link to="/" className='underline decoration-blue-700 border-b-2'>book</Link>.</h3>
                    </div>
            }
        </div>
    );
};

export default CurrentBookings;
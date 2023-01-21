import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { fetchCars } from '../../../features/cars/carsSlice';
import logo from "../../../assets/rent-vroom.jpg";
import { useContext } from 'react';
import { UseContext } from '../../Context/useContext';
import { toast } from 'react-hot-toast';

const CarDetails = () => {
    // Date Method
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // Data
    const { vehicleNumber } = useParams();
    const { cars, error, isLoading } = useSelector(state => state.cars);

    // Redux Toolkit
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCars())
    }, []);

    // useContext
    const { bookings, setBookings } = useContext(UseContext);

    const car = cars?.find(car => car.vehicleNumber === parseInt(vehicleNumber));

    const days = (endDate, startDate) => {
        let difference = endDate.getTime() - startDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    const navigate = useNavigate();

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phoneNumber = form.contact.value;
        const totalDay = days(endDate, startDate);
        const totalAmount = parseInt(totalDay) * car.rentPerDay;

        if (phoneNumber.startsWith("+91") && (phoneNumber.length > 10 || phoneNumber.length < 14) && totalDay > 0) {
            const bookingDetails = {
                name,
                phoneNumber,
                totalDay,
                vehicleNumber,
                model: car.model,
                totalAmount
            }
            setBookings([...bookings, bookingDetails]);
            toast.success("Booking Success");
            navigate("/current-bookings");
            car.availability = false;
        }
        else {
            toast.error("Please Provide Valid Information");
            return;
        }


    }



    return (
        <div className='mt-28 flex justify-center'>
            <div className="lg:flex flex-row gap-x-20">
                <div className="basis-2/4 flex justify-center items-center">
                    <div>
                        <img className='w-full' src={car?.images} alt="" />
                        <h2 className='text-cyan-500 font-bold text-xl text-center my-4'>{car?.model}</h2>
                    </div>
                </div>
                <div className="flex items-center justify-start bg-white h-full w-full">
                    <div className="mx-auto w-full max-w-lg">
                        <div className='flex justify-between items-center'>
                            <h3 className="font-bold text-cyan-500 text-xl">Booking Details</h3>
                            <img className='w-56' src={logo} alt="" />
                        </div>

                        <form
                            onSubmit={handleBooking}
                            className="mt-10">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="relative z-0">
                                    <label className="peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-cyan-500 focus:border-cyan-300 focus:outline-none focus:ring-0 font-bold" placeholder="John Doe" />

                                </div>
                                <div className="relative z-0">
                                    <label className="peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500">Contact</label>
                                    <input
                                        type="text"
                                        name="contact"
                                        required
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-cyan-500 focus:border-cyan-300 focus:outline-none focus:ring-0 font-bold" placeholder="+91" />

                                </div>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 my-8">
                                <div className="relative z-0">
                                    <label className="peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500">Issue Date</label>
                                    <DatePicker
                                        className='rounded bg-cyan-100 p-3 font-bold mt-2'
                                        selected={startDate}
                                        minDate={new Date()}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={startDate}
                                        dateFormat="dd-MM-yyyy"
                                    />

                                </div>
                                <div className="relative z-10">
                                    <label className="peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500">Return Date</label>
                                    <DatePicker
                                        className='bg-cyan-100 p-3 rounded font-bold mt-2'
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        // selectsEnd
                                        startDate={endDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        dateFormat="dd-MM-yyyy"
                                    />

                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <Link to="/" className="hover:text-cyan-500 font-bold">Back</Link>
                                <button
                                    type='submit'
                                    className={`relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-cyan-500 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-gray-50 group`}>
                                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-cyan-500 group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-400 ease-in-out group-hover:text-white">BOOK CAR</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
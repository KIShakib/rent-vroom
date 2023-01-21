import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "3px solid #164F64" : "",
            backgroundColor: isActive ? "transparent" : "transparent",
        }
    }

    const navLink = <>
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/current-bookings" style={navLinkStyle}>Current Booking</NavLink>
    </>
    return (
        <div className='flex justify-between bg-cyan-400 h-14 lg:px-28 items-center px-4' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Link to="/" className='text-xl font-bold' style={{ fontFamily: "'Bellefair', sans-serif" }}>RENT VROOM</Link>
            <ul className='flex justify-between font-bold lg:gap-x-20 gap-x-4'>{navLink}</ul>
        </div>
    );
};

export default Header;
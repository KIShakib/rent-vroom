import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            borderBottom: isActive ? "3px solid white" : "",
            backgroundColor: isActive ? "transparent" : "transparent",
        }
    }

    const navLink = <>
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/current-booking" style={navLinkStyle}>Current Booking</NavLink>
        <NavLink to="/dashboard" style={navLinkStyle}>DashBoard</NavLink>
    </>
    return (
        <div className='flex justify-between bg-cyan-200 h-14 px-10 items-center' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <h2 className='text-xl font-bold' style={{ fontFamily: "'Bellefair', sans-serif" }}>RENT VROOM</h2>
            <ul className='flex justify-between font-bold lg:gap-x-20'>{navLink}</ul>
        </div>
    );
};

export default Header;
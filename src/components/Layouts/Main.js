import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='lg:px-20 px-4'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
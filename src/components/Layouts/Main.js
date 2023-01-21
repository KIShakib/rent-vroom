import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='lg:px-20 px-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
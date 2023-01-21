import React from 'react';
import { useEffect } from 'react';
import useDynamicTitle from '../../../Hooks/useDynamicTitle';
import Cars from '../../Cars/Cars';

const Home = () => {
    useDynamicTitle("Home")
    return (
        <div className='my-10'>
            <Cars />
        </div>
    )
};

export default Home;
import React from 'react';

const Car = ({ car }) => {
    return (
        <div>
            <img src={car.images} alt="" />
        </div>
    );
};

export default Car;
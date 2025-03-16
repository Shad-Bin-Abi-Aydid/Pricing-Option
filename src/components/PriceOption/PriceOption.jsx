import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 text-white p-5 rounded-lg space-y-3 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-7xl text-bold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h1>
            <p className='text-4xl text-bold text-center'>{name}</p>
            <div className='grow'>
                {features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)}
            </div>
            <button className='bg-green-500 w-full py-2 rounded-lg hover:bg-green-900 text-xl font-bold duration-1000 mt-10'>Book Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;
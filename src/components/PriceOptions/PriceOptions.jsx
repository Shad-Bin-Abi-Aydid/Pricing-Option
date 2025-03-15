import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 19.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym hours only"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 39.99,
          "features": [
            "24/7 gym access",
            "Group fitness classes",
            "Locker room & showers",
            "Access to cardio and strength equipment"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 59.99,
          "features": [
            "24/7 gym access",
            "Unlimited group fitness classes",
            "Personal training session (1 per month)",
            "Sauna & steam room access",
            "Discount on supplements & merchandise"
          ]
        },
        {
          "id": 4,
          "name": "VIP Membership",
          "price": 79.99,
          "features": [
            "24/7 gym access",
            "Unlimited group fitness classes",
            "Weekly personal training session",
            "Sauna, steam room & pool access",
            "Exclusive member lounge",
            "Nutritional consultation"
          ]
        }
      ]
    return (
        <div>
            <h2 className='text-xl font-bold text-center'>Best Prices in the Town</h2>
            {
                priceOptions.map(option => <PriceOption key = {option.id} option = {option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;
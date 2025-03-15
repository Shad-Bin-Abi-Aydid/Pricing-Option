import React from 'react';
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    return (
        <div>
            {option.name}
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;
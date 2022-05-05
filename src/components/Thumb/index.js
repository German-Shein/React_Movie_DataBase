import { Image } from './Thumb.styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Thumb = ({alternative, image, movieId, clickable}) => (
    <div>
        {clickable ? (<Link to={`/${movieId}`}><Image alt={alternative} src={image} /></Link>) : (<Image alt={alternative} src={image} />)}
    </div>
);

Thumb.propTypes = 
{
    alternative: PropTypes.string,
	image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;
import PropTypes from 'prop-types';
import React from 'react';
import {Wrapper, Content} from './Grid.styles';

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

Grid.propTypes = 
{
    header: PropTypes.string
}

export default Grid;
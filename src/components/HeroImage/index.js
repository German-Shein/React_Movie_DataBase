import PropTypes from 'prop-types';
import React from 'react';
import {Wrapper, Content, Text} from './HeroImage.styles';

const HeroImage = (prop) => (
	<Wrapper image={prop.image}>
		<Content>
			<Text>
				<h1>{prop.title}</h1>
				<p>{prop.text}</p>
			</Text>
		</Content>
	</Wrapper>
);

/*

OR

const HeroImage = ({image, title, text}}) => (
	<Wrapper image={image}>
		<Content>
			<Text>
				<h1>{title}</h1>
				<p>{text}</p>
			</Text>
		</Content>
	</Wrapper>
);

*/

HeroImage.propTypes = 
{
	image: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
}

export default HeroImage;
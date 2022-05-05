import { Content, Wrapper } from './SearchBar.styles';
import PropTypes from 'prop-types';
import React, {Component, useEffect, useRef, useState} from 'react';
import searchIcon from '../../images/search-icon.svg'

const SearchBar = ({setSearchTerm}) => 
{
	const [state, setState] = useState ('');
	const initial = useRef (true);

	useEffect (() =>
	{
		if (initial.current)
		{
			initial.current = false;
			return;
		}
		const timer = setTimeout (() =>
		{
			setSearchTerm (state);
		}, 500);

		return () => clearTimeout (timer);
	}, [setSearchTerm, state]);

	return (
		<Wrapper>
			<Content>
				<img alt="Search Icon" src={searchIcon}></img>
				<input onChange={event => setState (event.currentTarget.value)} placeholder="Search for a movie" type="text" value={state}></input>
			</Content>
		</Wrapper>
	);
}

/*class SearchBar extends Component
{
	state = {value: ''};
	timeout = null;

	componentDidUpdate (_prevProps, _prevState)
	{
		if (this.state.value !== _prevState.value)
		{
			const {setSearchTerm} = this.props;
			clearTimeout (this.timeout);
			this.timeout = setTimeout (() =>
			{
				const {value} = this.state;
				setSearchTerm (value);
			}, 500);
		}
	}

	render ()
	{
		const {value} = this.state;

		return (
			<Wrapper>
				<Content>
					<img alt="Search Icon" src={searchIcon}></img>
					<input onChange={event => this.setState ({value: event.currentTarget.value})} placeholder="Search for a movie" type="text" value={value}></input>
				</Content>
			</Wrapper>
		);
	}
}
*/

SearchBar.propTypes = 
{
	setSearchTerm: PropTypes.func
}

export default SearchBar;
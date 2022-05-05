import { Context } from '../../context';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

const Header = () =>
{
    const [user] = useContext (Context);

	return (<Wrapper>
		<Content>
            <Link to="/">
                <LogoImg alt="rmdb-logo" src={RMDBLogo} />
            </Link>
            {user ? <span className='loggedin'>Welcome back, {user.username}!</span> : <Link className='login' to="/login">Log In</Link>}
			<TMDBLogoImg alt="tmdb-logo" src={TMDBLogo} />
		</Content>
	</Wrapper>);
}

export default Header;
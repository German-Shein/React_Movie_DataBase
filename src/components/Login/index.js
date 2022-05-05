import API from '../../API';
import Button from '../Button';
import { Context } from '../../context';
import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './Login.styles';

const Login = () => 
{
	const [username, setUsername] = useState ('');
	const [password, setPassword] = useState ('');
	const [error, setError] = useState (false);
	const [user, setUser] = useContext (Context);
	const navigate = useNavigate ()

	const handleInput = event =>
	{
		const name = event.currentTarget.name;
		const value = event.currentTarget.value;

		if (name === 'username')
		{
			setUsername (value);
		}
		if (name === 'password')
		{
			setPassword (value);
		}
	}

	const handleSubmit = async () =>
	{
		setError (false);
		try
		{
			const requestToken = await API.getRequestToken ();
			const sessionId = await API.authenticate (requestToken, username, password);
			setUser ({sessionId: sessionId.session_id, username});
			navigate ('/');
		}
		catch
		{
			setError (true);
		}
	}

	return (
		<Wrapper>
			{error && <div className='error'>There was an error!</div>}
			<label>Username:</label>
			<input name="username" onChange={handleInput} type="text" value={username}></input>
			<label>Password:</label>
			<input name="password" onChange={handleInput} type="password" value={password}></input>
			<Button callback={handleSubmit} text="Log In"></Button>
		</Wrapper>
	);
}

export default Login;
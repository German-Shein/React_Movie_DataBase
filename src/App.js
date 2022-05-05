import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle'
import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import React from 'react';
import UserProvider from './context';

const App = () => (
	<Router>
		<UserProvider>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/:movieId' element={<Movie/>} />
				<Route path='/*' element={<NotFound/>} />
			</Routes>
			<GlobalStyle />
		</UserProvider>
	</Router>
);

export default App;
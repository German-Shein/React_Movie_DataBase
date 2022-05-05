import API from '../API';
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import Button from './Button';
import Grid from './Grid';
import HeroImage from './HeroImage';
import NoImage from '../images/no_image.jpg';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import React, {Component} from 'react';
import Thumb from './Thumb';
import {useHomeFetch} from '../hooks/useHomeFetch';

const Home = () =>
{
	const {setSearchTerm, setIsLoadingMore, searchTerm, state, loading, error} = useHomeFetch ();

	if (error)
	{
		return <div>Shit's broken</div>
	}

	return (
		<>
			{!searchTerm && state.results [0] ? <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results [0].backdrop_path}`} text={state.results [0].overview} title={state.results [0].original_title} /> : null}
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
				{state.results.map (movie => (
						<Thumb alternative={movie.title + " Thumbnail"} clickable={true} image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} movieId={movie.id}></Thumb>
					))
				}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (<Button callback={() => setIsLoadingMore (true)} text="Load More" />)}
		</>
	);
}

/*
const initialState = 
{
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0
}

class Home extends Component
{
	state = 
	{
		movies: initialState,
		searchTerm: '',
		isLoadingMore: false,
		loading: false,
		error: false
	}

	fetchMovies = async (page, searchTerm = '') =>
	{
		try
		{
			this.setState ({error: false, loading: true});
			const movies = await API.fetchMovies (searchTerm, page);
			this.setState (prev => ({...prev, movies: {...movies, results: page > 1 ? [...prev.movies.results, ...movies.results] : [...movies.results]}, loading: false}));
		}
		catch (error)
		{
			this.setState ({error: true});
		}
	}

	handleSearch = searchTerm =>
	{
		this.setState ({movies: initialState, searchTerm}, () =>
		{
			this.fetchMovies (1, this.state.searchTerm);
		});
	}

	handleLoadMore = () => this.fetchMovies (this.state.movies.page + 1, this.state.searchTerm);

	componentDidMount ()
	{
		this.fetchMovies (1, '');
	}

	render ()
	{
		const {searchTerm, movies, loading, error} = this.state;
		if (error)
		{
			return <div>Shit's broken</div>
		}
		return (
			<>
				{!searchTerm && movies.results [0] ? <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results [0].backdrop_path}`} text={movies.results [0].overview} title={movies.results [0].original_title} /> : null}
				<SearchBar setSearchTerm={this.handleSearch} />
				<Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
					{movies.results.map (movie => (
							<Thumb alternative={movie.title + " Thumbnail"} clickable={true} image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} movieId={movie.id}></Thumb>
						))
					}
				</Grid>
				{loading && <Spinner />}
				{movies.page < movies.total_pages && !loading && (<Button callback={this.handleLoadMore} text="Load More" />)}
			</>
		);
	}
}
*/

export default Home;
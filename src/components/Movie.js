import Actor from './Actor';
import API from '../API';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import MovieInfo from './MovieInfo';
import MovieInfoBar from "./MovieInfoBar";
import NoImage from '../images/no_image.jpg'
import React, {Component} from "react";
import Spinner from './Spinner';
import { useMovieFetch } from '../hooks/useMovieFetch';
import { useParams } from 'react-router-dom';

const Movie = () =>
{
	const {movieId} = useParams ();
	const {state: movie, loading, error} = useMovieFetch (movieId);
	if (loading)
	{
		return <Spinner />
	}
	if (error)
	{
		return <div>Something went wrong...</div>
	}
	return (
		<>
			<BreadCrumb movieTitle={movie.original_title} />
			<MovieInfo movie={movie}></MovieInfo>
			<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}></MovieInfoBar>
			<Grid header="Actors">
				{movie.actors.map (actor => (
					<Actor character={actor.character} imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage} key={actor.credit_id} name={actor.name}></Actor>
				))}
			</Grid>
		</>
	);
}

export default Movie;

/*
class Movie extends Component
{
	state =
	{
		movie: {},
		loading: true,
		error: false
	}

	fetchMovie = async () =>
	{
		const {movieId} = this.props.params;
		try
		{
			this.setState ({loading: true, error: false});
			const movie = await API.fetchMovie (movieId);
			const credits = await API.fetchCredits (movieId);
			const directors = credits.crew.filter (member => member.job == 'Director');
			this.setState ({movie: {...movie, actors: credits.cast, directors}, loading: false});
		}
		catch (error)
		{
			this.setState ({error: true});
		}
	}

	componentDidMount ()
	{
		this.fetchMovie ();
	}
	
	render ()
	{
		const {movie, loading, error} = this.state;
		if (loading)
		{
			return <Spinner />
		}
		if (error)
		{
			return <div>Something went wrong...</div>
		}
		return (
			<>
				<BreadCrumb movieTitle={movie.original_title} />
				<MovieInfo movie={movie}></MovieInfo>
				<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}></MovieInfoBar>
				<Grid header="Actors">
					{movie.actors.map (actor => (
						<Actor character={actor.character} imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage} key={actor.credit_id} name={actor.name}></Actor>
					))}
				</Grid>
			</>
		);
	}
}

const MovieWithParams = props => <Movie {...props} params={useParams ()} />

export default MovieWithParams;
*/
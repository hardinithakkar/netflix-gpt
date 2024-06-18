import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
	// Fetch data from TMDB API and update store
	const dispatch = useDispatch();
	const nowPlayingMovies = useSelector(
		(store) => store.movies.nowPlayingMovies
	);
	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};

	useEffect(() => {
		!nowPlayingMovies && getNowPlayingMovies();
	}, []);
};

export default useNowPlayingMovies;

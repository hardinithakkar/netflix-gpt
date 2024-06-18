import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
	// Fetch data from TMDB API and update store
	const dispatch = useDispatch();
	const popularMovies = useSelector((store) => store.movies.popularMovies);
	const getPopularMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/popular",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addPopularMovies(json.results));
	};

	useEffect(() => {
		!popularMovies && getPopularMovies();
	}, []);
};

export default usePopularMovies;

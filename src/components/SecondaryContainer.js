import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	return (
		movies.nowPlayingMovies && (
			<div className="bg-black">
				<div className="mt-0 md:-mt-52 relative z-20">
					<MovieList
						title={"Now Playing"}
						movies={movies.nowPlayingMovies}
					/>
					<MovieList
						title={"Trending"}
						movies={movies.nowPlayingMovies}
					/>
					<MovieList
						title={"Popular Playing"}
						movies={movies.popularMovies}
					/>
					<MovieList
						title={"Upcoming Playing"}
						movies={movies.nowPlayingMovies}
					/>
					<MovieList
						title={"Horror Movies"}
						movies={movies.nowPlayingMovies}
					/>
				</div>
			</div>
		)
	);
};

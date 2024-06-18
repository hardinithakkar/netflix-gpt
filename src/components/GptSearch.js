import { GptMovieSuggestions } from "./GptMovieSuggestions";
import { GptSearchBar } from "./GptSearchBar";
import { BRG_IMG } from "../utils/constants";

const GptSearch = () => {
	return (
		<>
			<div className="fixed -z-10">
				<img
					className="h-screen object-cover md:w-screen"
					src={BRG_IMG}
					alt="bg-img"
				/>
			</div>
			<div className="">
				<GptSearchBar />
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GptSearch;

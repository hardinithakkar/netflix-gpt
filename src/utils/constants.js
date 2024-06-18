export const LOGO =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BRG_IMG =
	"https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/af676bd6-ca61-4cb3-ad8a-bd817d320741/US-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const USER_AVATAR = "https://example.com/jane-q-user/profile.jpg";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
	},
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
	{ identifier: "en", name: "English" },
	{ identifier: "hindi", name: "Hindi" },
	{ identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

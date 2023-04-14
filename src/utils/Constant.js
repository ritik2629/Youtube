const GOOGLE_API_KEY = "AIzaSyBVzCwtv_XHaw8XFwF9XRaqYBssSgkCQAM";

export const YOUTUBE_API_KEY = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;


export const YOUTUBE_SUGGESTION_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
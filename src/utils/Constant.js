const GOOGLE_API_KEY = "AIzaSyBVzCwtv_XHaw8XFwF9XRaqYBssSgkCQAM";

export const YOUTUBE_API_KEY = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const VIDEO_DESCRIPTION = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

export const YOUTUBE_SUGGESTION_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const RELATED_VIDEO_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=${GOOGLE_API_KEY}&relatedToVideoId=`;

export const YOUTUBE_COMMENTS_API = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=${GOOGLE_API_KEY}&videoId=`;

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key= + ${GOOGLE_API_KEY}&q=`;

export const OFFSET_LIVE_CHAT = 20;

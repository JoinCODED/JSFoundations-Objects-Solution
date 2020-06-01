/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  return channel.name;
}

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  return channel.videos.length;
}

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * Bonus: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  let found = false;
  channel.videos.forEach((vid) => {
    if (vid.title.toLowerCase() === videoTitle.toLowerCase()) found = true;
  });
  return found;

  // Alternative Solution:
  // return channel.videos.some(
  //   (video) => video.title.toLowerCase() === videoTitle.toLowerCase()
  // );
}

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * Bonus: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  let channelFound;
  channels.forEach((channel) => {
    if (channel.name.toLowerCase() === channelName.toLowerCase())
      channelFound = channel;
  });
  return channelFound;

  // Alternative Solution:
  // return channels.find(
  //   (channel) => channel.name.toLowerCase() === channelName.toLowerCase()
  // );
}

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * Bonus: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  let channelFound;
  channels.forEach((channel) => {
    channel.videos.forEach((video) => {
      if (video.title.toLowerCase() === videoTitle.toLowerCase())
        channelFound = channel;
    });
  });
  return channelFound;

  // Alternative Solution:
  // return channels.find((channel) =>
  //   channel.videos.some(
  //     (video) => video.title.toLowerCase() === videoTitle.toLowerCase()
  //   )
  // );
}

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  const queryLowerCased = query.toLowerCase();
  return channels.filter(
    (ch) =>
      ch.name.toLowerCase().includes(queryLowerCased) ||
      ch.description.toLowerCase().includes(queryLowerCased)
  );
}

/**************************************************************
 * totalVideosDuration(channel):
 * - receives a channel object
 * - returns the total duration of all the videos in this channel
 *
 * Bonus: use iteration method `.reduce()`
 ****************************************************************/
function totalVideosDuration(channel) {
  let totalDuration = 0;
  channel.videos.forEach((video) => (totalDuration += video.duration));
  return totalDuration;

  // Alternative Solution:
  // return channel.videos.reduce(
  //   (totalDuration, video) => totalDuration + video.duration,
  //   0
  // );
}

/**************************************************************
 * channelWithMostContent(channels):
 * - receives an array of channel objects
 * - returns the channel with the highest total video duration
 *
 * Hint: use the `totalVideosDuration()` function
 * Bonus: use iteration method `.sort()`
 ****************************************************************/
function channelWithMostContent(channels) {
  let channel = channels[0];
  channels.forEach((ch) => {
    if (totalVideosDuration(ch) > totalVideosDuration(channel)) channel = ch;
  });
  return channel;
}

/**************************************************************
 * longestChannelName(channels):
 * - receives an array of channel objects
 * - returns the channel with the longest name
 *
 * Bonus: use iteration method `.sort()`
 ****************************************************************/
function longestChannelName(channels) {
  let channelWithLongestName = channels[0];
  channels.forEach((channel) => {
    if (channel.name.length > channelWithLongestName.name.length)
      channelWithLongestName = channel;
  });
  return channelWithLongestName;
}

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
  totalVideosDuration,
  channelWithMostContent,
  longestChannelName,
};

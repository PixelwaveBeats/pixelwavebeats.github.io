function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

async function fetchVideos() {
  const response = await fetch('https://pixelwavebeats.github.io/assets/json/embeds.json');
  const data = await response.json();
  let randomVideoIndex;

  do {
    randomVideoIndex = randomIndex(data.embeds.videos);
  } while (previousVideoIDs.includes(randomVideoIndex));

  if (previousVideoIDs.length >= Math.floor(data.embeds.videos.length / 1.3)) {
    previousVideoIDs = previousVideoIDs.slice(1, previousVideoIDs.length);
  } 
    
  previousVideoIDs.push(randomVideoIndex);
  const selectedVideo = data.embeds.videos[randomVideoIndex];

  videoTitle.innerHTML = selectedVideo.title;
  videoEmbed.src = data.config.video + selectedVideo.src + data.config.autoplay + selectedVideo.autoplay;
}

async function fetchPlaylists() {
  const response = await fetch('https://pixelwavebeats.github.io/assets/json/embeds.json');
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * 0);
  const selectedPlaylist = data.embeds.playlists[randomIndex];

  playlistTitle.innerHTML = selectedPlaylist.title;
  playlistEmbed.src = data.config.playlist + selectedPlaylist.src;
}

const videoTitle = document.querySelector('#videoTitle');
const videoEmbed = document.querySelector('#video');
const playlistEmbed = document.querySelector('#playlist');
const playlistTitle = document.querySelector('#playlistTitle');
const reloadButton = document.querySelector('#reloadButton');
const options = {
  width: '100%',
  height: 540,
  channel: "pixelwavebeats",
  parent: [
    "pixelwavebeats.github.io",
  ],
  muted: true,
};
let previousVideoIDs = [0];

reloadButton.addEventListener('click', fetchVideos);

var player = new Twitch.Player("twitch-player", options);

fetchVideos();
fetchPlaylists();

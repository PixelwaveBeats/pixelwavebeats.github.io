var options = {
  width: '100%',
  height: 540,
  channel: "pixelwavebeats",
  parent: [
    "pixelwavebeats.github.io",
  ],
  muted: true,
};

var player = new Twitch.Player("twitch-player", options);

player.setVolume(0.5);

fetch('../json/embeds.json')
  .then(response => response.json())
  .then(data => {
    const videos = data.videos;
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    
    console.log(randomVideo);
  })
  .catch(error => console.error('Error fetching the embeds.json file:', error));
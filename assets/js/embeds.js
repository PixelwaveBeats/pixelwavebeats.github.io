var options = {
  width: '100%',
  height: 500,
  channel: "pixelwavebeats",
  parent: [
    "pixelwavebeats.github.io",
  ],
};

var player = new Twitch.Player("twitch-player", options);

player.setVolume(0);

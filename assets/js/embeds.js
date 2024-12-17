var options = {
  width: '100%',
  height: 600,
  channel: "pixelwavebeats",
  parent: [
    "pixelwavebeats.github.io",
  ],
  muted: true,
};

var player = new Twitch.Player("twitch-player", options);

player.setVolume(0.5);
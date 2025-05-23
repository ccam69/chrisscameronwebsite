let currentEpisodeIndex = null;
let isPlaying = false;
let isPaused = false;
let soundCloudWidget = null;
let mixcloudWidget = null; 
let currentPlaybackTime = 0; 

const episodes = [
  {
    type: 'Souncloud, Ep. 19',
    iframe: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/internetpublicradio/sound-ecology-sound-ecology-environmental-impact-of-explosive-weapons-in-gaza-210824-210824&auto_play=true',
    title: 'You’re listening to Sound Ecology Ep19 Environmental Impact of Explosive Weapons in Gaza',
  },
  {
    type: 'Soundcloud, Ep 17',
    iframe: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/internetpublicradio/sound-ecology-w-chris-era-sam-leff-vermillion-290524&auto_play=true',
    title: 'You’re listening to Sound Ecology Ep17 w/ Chris Era, Sam Leff + Vermillion',
  },
  {
    type: 'Soundcloud ep 16',
    iframe: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/internetpublicradio/sound-ecology-w-pochola-270324&auto_play=true',
    title: 'You’re listening to Sound Ecology Ep16 w/ Pochola'
  },
  {
    type: 'Soundcloud ep 15',
    iframe: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/internetpublicradio/sound-ecology-gaza-sounds-w-climate-collapse-280224&auto_play=true',
    title: 'You’re listening to Sound Ecology Ep15 Gaza Sounds w/ Climate Collapse'
  },
  {
    type: 'Mixcloud ep 14',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-pochola-221123%2F&autoplay=1&muted=1',
    title: 'You’re listening to Sound Ecology Ep14 w/ Pochola'
  },
  {
    type: 'Mixcloud ep 13',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-chris-era-dj-lalo-251023%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep13 w/ Chris Era + DJ Lalo'
  },
  {
    type: 'Mixcloud ep 12',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-climate-collapse-invernomuto-200923%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep12 w/ Climate Collapse & Invernomuto'
  },
  {
    type: 'Mixcloud ep 11',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-sarovar-tender-buttons-16th-november-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep 11 w/ Sarovar & Tender Buttons'
  },
  {
    type: 'Mixcloud ep 10',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-pochola-deadstar-lucky-poole-toro-19th-october-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep10 w/ Pochola, Deadstar & Lucky Poole-toro'
  },
  {
    type: 'Mixcloud ep 9',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-climate-collapse-rosa-noviello-tobias-koch-21st-september-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep9 w/ Climate Collapse, Rosa Noviello & Tobias Koch'
  },
  {
    type: 'Mixcloud ep 8',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-chris-era-guests-special-birthday-mix-17th-august-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep8 w/ Chris Era + Guests Special Birthday Mix'
  },
  {
    type: 'Mixcloud ep 7',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-sarovar-20th-july-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep7 w/ Sarovar'
  },
  {
    type: 'Mixcloud ep 6',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-climate-collapse-guerre-maladie-famine-and-am-kanngieser-15th-june-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep6 w/ Climate Collapse & Guerre Maladie Famine and Am Kanngieser'
  },
  {
    type: 'Mixcloud ep 5',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-pochola-traxmatik-18th-may-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep5 w/ Pochola & Traxmatik'
  },
  {
    type: 'Soundcloud ep 4',
    iframe: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/chrissarahcameron/sound-ecology-ep4&auto_play=true',
    title: 'You’re listening to Sound Ecology Ep4'
  },
  {
    type: 'Mixcloud ep 3',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-sarovar-nicholas-pittman-16th-march-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep3 w/ Sarovar & Nicholas Pittman'
  },
  {
    type: 'Mixcloud ep 2',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-pochola-climate-collapse-jazmina-figueroa-16th-february-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep2 w/ Pochola, climate collapse & Jazmina Figueroa'
  },
  {
    type: 'Mixcloud ep 1',
    iframe: 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Finternetpublicradio%2Fsound-ecology-w-sarovar-chris-era-corduroy-19th-january-2022%2F&autoplay=1',
    title: 'You’re listening to Sound Ecology Ep1 w/ Sarovar, Chris Era & Corduroy'
  }
];

// Load a specific episode
function loadEpisode(index) {
  currentEpisodeIndex = index;
  currentPlaybackTime = 0; // Reset playback time when loading a new episode
  const episode = episodes[index];

  document.getElementById("episode-title").innerText = episode.title;

  const iframe = document.createElement("iframe");
  iframe.src = episode.iframe;
  iframe.allow = "autoplay";
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.style.width = "100%";
  iframe.style.height = "160px";
  iframe.id = "audio-player";

  const container = document.getElementById("hidden-player");
  container.innerHTML = "";
  container.appendChild(iframe);

  // Check if it's a SoundCloud episode and initialize the widget
  if (episode.iframe.includes("soundcloud.com")) {
    soundCloudWidget = SC.Widget(iframe);
    soundCloudWidget.bind(SC.Widget.Events.READY, function () {
      soundCloudWidget.setVolume(isPaused ? 0 : 100); 
      soundCloudWidget.play(); 
      isPlaying = true;

      soundCloudWidget.bind(SC.Widget.Events.PLAY_PROGRESS, function (event) {
        currentPlaybackTime = event.currentPosition; // Track current playback time
      });

      soundCloudWidget.bind(SC.Widget.Events.FINISH, function () {
        loadRandomEpisode(); // Load a new random episode after the current one ends
      });
    });
    mixcloudWidget = null; 
  } else if (episode.iframe.includes("mixcloud.com")) {
    mixcloudWidget = Mixcloud.PlayerWidget(iframe)
    mixcloudWidget.ready.then(() => {
      mixcloudWidget.play(); 
      isPlaying = true;
    });
    soundCloudWidget = null;
  }
}


// Load a random episode
function loadRandomEpisode() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * episodes.length);
  } while (newIndex === currentEpisodeIndex);
  loadEpisode(newIndex);
  isPlaying = true;
}

// Toggle play/pause
function togglePlayPause() {
  const playPauseButtonText = document.querySelector("#pause-button .button-text"); // Reuse the button for play/pause

  if (soundCloudWidget) {
    // Handle SoundCloud playback
    if (isPlaying) {
      soundCloudWidget.pause(); // Pause SoundCloud
      playPauseButtonText.textContent = "Play";
    } else {
      soundCloudWidget.seekTo(currentPlaybackTime); // Resume from where it was paused
      soundCloudWidget.play(); // Play SoundCloud
      playPauseButtonText.textContent = "Pause";
    }
  } else if (mixcloudWidget) {
    // Handle Mixcloud playback
    if (isPlaying) {
      mixcloudWidget.pause(); // Pause Mixcloud
      playPauseButtonText.textContent = "Play";
    } else {
      mixcloudWidget.play(); // Resume Mixcloud
      playPauseButtonText.textContent = "Pause";
    }
  }

  isPlaying = !isPlaying; // Toggle play/pause state
}

// Event listeners
window.addEventListener("DOMContentLoaded", () => {
  loadEpisode(Math.floor(Math.random() * episodes.length));

  document.getElementById("randomize-button").addEventListener("click", loadRandomEpisode);
  document.getElementById("pause-button").addEventListener("click", togglePlayPause); // Updated to togglePlayPause
});
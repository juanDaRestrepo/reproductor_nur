const songs = [
  {
    url: "songs/Alfredo Mazzilli - Divinus EP - 01 Divinus.wav",
    name: "Divinus",
    album: "Divinus EP",
    artist: "Alfredo Mazzilli",
    mixType: "Original Mix",
    imgUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/3de606d9-8679-4f9c-96fa-961772c1138d.jpg",
  },
  {
    url: "songs/Atomic Moog - Rise & Fall - 03 Fall.wav",
    name: "Fall",
    album: "Rise & Fall",
    artist: "Atomic Moog",
    mixType: "Original Mix",
    imgUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/d663d098-1906-44c1-8bb8-00bd55908425.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  
  let currentIndex = 0;
  const customPlayer = document.getElementById("customPlayer");
  const player = customPlayer.querySelector("#myPlayer");
  const prevBtn = customPlayer.querySelector("#prevBtn");
  const nextBtn = customPlayer.querySelector("#nextBtn");
  const songNameDisplay = document.getElementById("songName");
  const mixTypeDisplay = document.getElementById("mixType");
  const albumNameDisplay = document.getElementById("albumName");
  const artistNameDisplay = document.getElementById("artistName");
  const playPauseBtn = document.querySelector("#playPauseBtn");
  const playPauseIcon = document.querySelector("#playPauseIcon");
  const seekBar = document.querySelector("#seekBar");
  const artwork = document.querySelector("#artwork");

  player.src = songs[currentIndex].url;

  changeTrackInfo(
    songs[currentIndex].name,
    songs[currentIndex].album,
    songs[currentIndex].artist,
    songs[currentIndex].imgUrl,
    songs[currentIndex].mixType
  );

  artwork.src = `${songs[currentIndex].imgUrl}`;

  player.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    player.src = songs[currentIndex].url;
    player.play();
    changeTrackInfo(
      songs[currentIndex].name,
      songs[currentIndex].album,
      songs[currentIndex].artist,
      songs[currentIndex].imgUrl,
      songs[currentIndex].mixType
    );
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    player.src = songs[currentIndex].url;
    player.play();
    changeTrackInfo(
      songs[currentIndex].name,
      songs[currentIndex].album,
      songs[currentIndex].artist,
      songs[currentIndex].imgUrl,
      songs[currentIndex].mixType
    );
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % songs.length;
    player.src = songs[currentIndex].url;
    player.play();
    changeTrackInfo(
      songs[currentIndex].name,
      songs[currentIndex].album,
      songs[currentIndex].artist,
      songs[currentIndex].imgUrl,
      songs[currentIndex].mixType
    );
  });

  playPauseBtn.addEventListener("click", () => {
    if (player.paused) {
      player.play();
      playPauseIcon.classList.remove("bi-play-fill");
      playPauseIcon.classList.add("bi-pause-fill");
    } else {
      player.pause();
      playPauseIcon.classList.remove("bi-pause-fill");
      playPauseIcon.classList.add("bi-play-fill");
    }
  });

  player.addEventListener("timeupdate", () => {
    const percent = (player.currentTime / player.duration) * 100;

    seekBar.value = percent;
  });

  seekBar.addEventListener("input", () => {
    const seekTime = (seekBar.value / 100) * player.duration;
    player.currentTime = seekTime;
  });

  function changeTrackInfo(name, album, artist, artwork, mixType) {
    songNameDisplay.textContent = name;
    albumNameDisplay.textContent = album;
    artistNameDisplay.textContent = artist;
    mixTypeDisplay.textContent = mixType;
    artwork.src = artwork;
  }
});

const songs = [
  {
      url: "songs/Alfredo Mazzilli - Divinus EP - 01 Divinus.wav",
      name: "Divinus",
      album: "Divinus EP",
      artist: "Alfredo Mazzilli"
  },
  {
      url: "songs/Atomic Moog - Rise & Fall - 03 Fall.wav",
      name: "Fall",
      album: "Rise & Fall",
      artist: "Atomic Moog"
  }
];

let currentIndex = 0;
const player = document.getElementById("myPlayer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const songNameDisplay = document.getElementById("songName");
const albumNameDisplay = document.getElementById("albumName");
const artistNameDisplay = document.getElementById("artistName");

player.src = songs[currentIndex].url;
songNameDisplay.textContent = `${songs[currentIndex].name}`;
albumNameDisplay.textContent = `${songs[currentIndex].album}`;
artistNameDisplay.textContent = ` ${songs[currentIndex].artist}`;

player.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % songs.length;
  player.src = songs[currentIndex].url;
  player.play();
  songNameDisplay.textContent = `${songs[currentIndex].name}`;
  albumNameDisplay.textContent = `${songs[currentIndex].album}`;
  artistNameDisplay.textContent = ` ${songs[currentIndex].artist}`;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  player.src = songs[currentIndex].url;
  player.play();
  songNameDisplay.textContent = `${songs[currentIndex].name}`;
  albumNameDisplay.textContent = `${songs[currentIndex].album}`;
  artistNameDisplay.textContent = ` ${songs[currentIndex].artist}`;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % songs.length;
  player.src = songs[currentIndex].url;
  player.play();
  songNameDisplay.textContent = `${songs[currentIndex].name}`;
  albumNameDisplay.textContent = `${songs[currentIndex].album}`;
  artistNameDisplay.textContent = ` ${songs[currentIndex].artist}`;
});

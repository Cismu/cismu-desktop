import Playlist from "./Playlist.js";

class Player extends Playlist {
  constructor() {
    super();
    this.element = document.createElement("audio");
    this.element.autoplay = !0;
    this.addEventListeners();
  }

  load(val) {
    this.element.src = val;
    this.element.load();
  }

  pause() {
    return this.element.pause() || Promise.resolve();
  }

  play() {
    return this.element.play() || Promise.resolve();
  }

  stop() {
    this.pause();
    return (this.element.src = "") || Promise.resolve();
  }

  get muted() {
    return this.element.muted;
  }

  set muted(val) {
    this.element.muted = Boolean(val);
  }

  get volume() {
    return this.element.volume;
  }

  set volume(val) {
    this.element.volume = val;
  }

  get currentTime() {
    return this.element.currentTime;
  }

  set currentTime(val) {
    this.element.currentTime = val;
  }

  addEventListeners() {
    this.element.addEventListener('ended', this.playlist_Next());
  }

  removeEventListeners() {
    this.element.removeEventListener('ended', this.playlist_Next());
  }
}

export default Player;

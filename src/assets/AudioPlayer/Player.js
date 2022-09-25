import Playlist from "./Playlist.js";

class Player extends Playlist {
  constructor() {
    super();
    this.element = document.createElement("audio");
    this.element.autoplay = !0;
    this.addEventListeners();
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

  next() {
    this._playlist_Next();
    this._load();
  }

  prev() {
    this._playlist_Prev();
    this._load();
  }

  load_playlist(val) {
    this._playlist_Load(val)
  }

  _load() {
    this.element.src = this.select;
    this.element.load();
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
    this.element.addEventListener('ended', ()=>this.next());
  }

  removeEventListeners() {
    this.element.removeEventListener('ended', ()=>this.next());
  }
}

export default Player;

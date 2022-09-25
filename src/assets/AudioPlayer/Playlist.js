class Playlist {
  constructor() {
    this.current = -1; // number
    this.auto_preparse = false; // bool
    this.has_prev = false; // bool
    this.has_next = false; // bool
    this.repeat = false; // bool
    this.order = {}; // object
    this.items = []; // array
    this.items_backup = []; // array
    this.select = {}; // object
  }

  _playlist_AddListener() {}
  _playlist_RemoveListener() {}
  _playlist_Delete() {}
  _playlist_Create() {}
  _playlist_Modify() {}

  _playlist_Load(items) {
    this.items = items;
    this.items_backup = [];
  }

  _playlist_Next() {
    this.current += 1;

    if (this.current >= this.items.length) {
      this.current = this.items.length - 1;
      this.has_next = false;
    } else this.has_next = true;

    this.select = this.items[this.current];
  }

  _playlist_Prev() {
    this.current -= 1;

    if (this.current <= 0) {
      this.current = 0;
      this.has_prev = false;
    } else this.has_prev = true;

    this.select = this.items[this.current];
  }

  _playlist_Randrange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  /* Fisher-Yates shuffle */
  _playlist_Shuffle() {
    this.items_backup = this.items.slice();
    for (let x = this.items.length - 1; x > 0; x--) {
      let az = this.randrange(0, x - 1);
  
      let tmp = this.items[az];
      this.items[az] = this.items[x];
      this.items[x] = tmp;
    }
  }
}

export default Playlist;
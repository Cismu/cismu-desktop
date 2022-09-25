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

  playlist_AddListener() {}
  playlist_removeListener() {}
  playlist_Delete() {}
  playlist_Create() {}
  playlist_Modify() {}

  playlist_Next() {
    if (this.has_next) {
      this.current++;

      if (this.current >= this.items.length) {
        this.current = this.items.length - 1;
        this.has_next = false;
      } else this.has_next = true;
    }

    this.select = this.items[this.current];
  }

  playlist_Prev() {
    if (this.has_prev) {
      this.current--;

      if (this.current <= 0) {
        this.current = 0;
        this.has_prev = false;
      } else this.has_prev = true;
    }

    this.select = this.items[this.current];
  }

  playlist_Randrange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  /* Fisher-Yates shuffle */
  playlist_Shuffle() {
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
import logo from './logo.svg';
import Player from './AudioPlayer/Player.js'
import './App.css';


function App() {
  const player = new Player();
  let playlist = ['/musics/39.mp3', '/musics/gimme.mp3', '/musics/levan.mp3'];
  player.load_playlist(playlist);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button onClick={ () => player.next() }>Next</button>
        <button onClick={ () => player.prev() }>Prev</button>
      </header>
    </div>
  );
}

export default App;

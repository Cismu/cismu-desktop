import logo from './logo.svg';
import Player from './AudioPlayer/Player.js'
import './App.css';

function App() {
  const player = new Player();
  player.load('file:///C:/Users/Dayax/Music/A%20LA%20MUJER%20DE%20UN%20AMIGO%20MIO%20-%20AR.mp3');

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
      </header>
    </div>
  );
}

export default App;

import Slider from './Slider.jsx'
import React from 'react';
import './WebPlayer.css';

class WebPlayer extends React.Component {
  render() {
    return (
      <div id='web-player'>
        <Slider />
      </div>
    );
  }
}

export default WebPlayer;
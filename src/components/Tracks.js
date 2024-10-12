import React, { Component } from "react";

class Tracks extends Component {
  state = { playing: false, audioObj: null, previewUrl: null };

  playAudio = (previewUrl) => {
    const audio = new Audio(previewUrl);
    audio.play();
    this.setState({ playing: true, audioObj: audio, previewUrl });
    audio.addEventListener("ended", () => {
      this.setState({ playing: false, audioObj: null });
    });
  };

  pauseAudio = () => {
    this.state.audioObj.pause();
    this.setState({ playing: false, audioObj: null, previewUrl: null });
  };

  handleAudio = (previewUrl) => () => {
    if (this.state.playing) {
      this.pauseAudio();
      this.state.previewUrl !== previewUrl && this.playAudio(previewUrl);
      return;
    }
    this.playAudio(previewUrl);
  };

  trackIcon = (track) => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }
    if (this.state.playing && this.state.previewUrl === track.preview_url) {
      return <span>| |</span>;
    }
    return <span>&#9654;</span>;
  };

  render() {
    return this.props.tracks.map((track) => {
      const { id, name, album, preview_url } = track;
      return (
        <div key={id} className="track" onClick={this.handleAudio(preview_url)}>
          <img
            src={album.images[0].url}
            alt="track-image"
            className="track-image"
          ></img>
          <p className="track-text">{name}</p>
          <p className="track-icon">{this.trackIcon(track)}</p>
        </div>
      );
    });
  }
}

export default Tracks;

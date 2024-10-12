import React, { Component } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API_URL = "https://spotify-api-wrapper.appspot.com";
class App extends Component {
  state = { artist: null, tracks: [] };

  componentDidMount() {
    this.onSubmit("honey singh");
  }

  onSubmit = (searchText) => {
    fetch(`${API_URL}/artist/${searchText}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });

          fetch(`${API_URL}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => {
              this.setState({ tracks: json.tracks });
            });
        }
      });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Search onSubmit={this.onSubmit}></Search>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;

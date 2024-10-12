import React, { Component } from "react";

class Search extends Component {
  state = { search: "" };

  onChangeHandler = (event) => {
    this.setState({ search: event.target.value });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.search);
  };

  onKeyPressEventHandler = (event) => {
    if (event.key == "Enter") {
      this.props.onSubmit(this.state.search);
    }
  };

  render() {
    return (
      <div>
        <h3>Music Master</h3>
        <input
          type="text"
          onChange={this.onChangeHandler}
          onKeyPress={this.onKeyPressEventHandler}
          placeHolder="Enter Artist name"
        ></input>
        <button type="submit" onClick={this.onSubmit}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;

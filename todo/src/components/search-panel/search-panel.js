import React, { Component } from "react";
import "./search-panel.css";

export default class SearchBar extends Component {
  onChangeSearchPanel = e => {
    this.props.onChangeSearchVal(e.target.value);
  };

  render() {
    const searchText = "type here";
    return (
      <form>
        <input
          className="form-control search-input"
          placeholder={searchText}
          onChange={this.onChangeSearchPanel}
        ></input>
      </form>
    );
  }
}

import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    const { setNewFilter } = this.props;
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => setNewFilter("All")}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-info "
          onClick={() => setNewFilter("Active")}
        >
          Active
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => setNewFilter("Done")}
        >
          Done
        </button>
      </div>
    );
  }
}

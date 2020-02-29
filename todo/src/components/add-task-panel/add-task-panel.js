import React, { Component } from "react";
import "./add-task-panel.css";

export default class AddTaskPanel extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({ label: "" });
  };

  render() {
    return (
      <form className="d-flex marginTop" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control add-task-input"
          placeholder="Type Your New Task HERE"
          onChange={this.onLabelChange}
          value={this.state.label}
        ></input>
        <button type="submit" className="btn btn-success btn-sm float-right ">
          Add task
        </button>
      </form>
    );
  }
}

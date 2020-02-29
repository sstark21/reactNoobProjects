import React, { Component } from "react";
import shortid from "shortid";

import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import AddTaskPanel from "../add-task-panel";
import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      this.createItem("Drink coffee"),
      this.createItem("Create React App"),
      this.createItem("Read the book"),
      this.createItem("Eat something")
    ],
    searchValue: "",
    setFilter: "All"
  };

  delItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr
      };
    });
  };

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: shortid.generate()
    };
  }

  addItem = e => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData, this.createItem(e)];
      return {
        todoData: newArr
      };
    });
  };

  onToggle = (arr, id, param) => {
    const idx = arr.findIndex(el => el.id === id);
    let oldItem = arr[idx];
    let newItem = { ...oldItem, [param]: !oldItem[param] };

    const newArr = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    return newArr;
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggle(todoData, id, "done")
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggle(todoData, id, "important")
      };
    });
  };

  search(arr, searchVal) {
    return arr.filter(item => {
      return item.label.toLowerCase().includes(searchVal.toLowerCase());
    });
  }

  onChangeSearchVal = el => {
    console.log("Test", el);
    this.setState({ searchValue: el });
  };

  setNewFilter = filter => {
    console.log("change filter", filter);
    this.setState({ setFilter: filter });
  };

  render() {
    const { todoData, searchValue, setFilter } = this.state;
    let newData = todoData;

    if (searchValue.length) {
      newData = this.search(todoData, searchValue);
    } else if (setFilter.indexOf("All") === -1) {
      setFilter.indexOf("Active") === -1
        ? (newData = newData.filter(el => el.done))
        : (newData = newData.filter(el => !el.done));
    }

    const doneCount = todoData.filter(el => el.done).length;
    const activeCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader todo={activeCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onChangeSearchVal={this.onChangeSearchVal} />
          <ItemStatusFilter setNewFilter={this.setNewFilter} />
        </div>
        <TodoList
          todos={newData}
          onDeleted={this.delItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddTaskPanel addItem={this.addItem} />
      </div>
    );
  }
}

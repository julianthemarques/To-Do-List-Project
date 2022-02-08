/* eslint react/no-direct-mutation-state: off*/

/// código não utilizado, vá para TasksHook. Para informações acesse o aviso em README.md

import React, { Component } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

export class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], task: "", updatetext: "", hidden: false };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  addTask() {
    this.setState({
      tasks: [].concat(this.state.tasks, this.state.task),
    });
  }

  removeTask() {
    this.removeTask = (index) => {
      const tasks = this.state.tasks.slice();
      tasks.splice(index, 1);
      this.setState({ tasks });
    };
  }

  updateTask(index) {
    let itemTask = this.state.tasks[index];
    let arrayCopy = [...this.state.tasks];
    console.log(itemTask);
    itemTask = this.state.updatetext;
    arrayCopy[index] = itemTask;
    this.setState({ tasks: arrayCopy });
  }

  handleDisplay() {
    const displayDiv = document.getElementById("displayDiv");
    if (this.state.hidden === false) {
      this.state.hidden = true;
      displayDiv.style.display = "none";
    } else {
      this.state.hidden = false;
      displayDiv.style.display = "block";
    }
  }

  render() {
    return (
      <>
        <h1 className="title">{this.props.title}</h1>
        <div>
          <input
            onChange={this.handleChange}
            value={this.state.task}
            placeholder="type here"
          />
          <button onClick={this.addTask}>Add Todo</button>
        </div>

        <div className="todos">
          <ul className="containerList">
            {this.state.tasks.map((task, index) => (
              <li key={index} classname="todo-list">
                {task}
                <AiTwotoneDelete
                  className="emoji"
                  onClick={() => this.removeTask(index)}
                />
                <GrUpdate
                  className="emoji"
                  onClick={() => this.handleDisplay()}
                />
                <div id="displayDiv">
                  <input
                    onChange={(e) =>
                      this.setState({ updatetext: e.target.value })
                    }
                  ></input>
                  <button
                    classname="button-update"
                    onClick={() => this.updateTask(index)}
                  >
                    update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

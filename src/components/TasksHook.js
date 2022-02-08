import React, { useRef } from "react";
import usePersistedState from "../utils/usePersistedState";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

function TaskHook(props) {
  const [todos, setTodos] = usePersistedState("TODOS", []);
  const [text, setText] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [id, setId] = useState(0);

  const inputAddTodo = useRef(null);
  const inputUpdateTodo = useRef(null);

  function verifyInput(input) {
    if (
      input?.value === "" ||
      input?.value === " " ||
      /^(.)\1*$/.test(inputAddTodo.current?.value)
    ) {
      alert("Ops... Invalid Task!");
      return false;
    }
    return true;
  }

  function addTask() {
    if (verifyInput(inputAddTodo.current)) {
      const allTodos = todos;
      setTodos([
        ...allTodos,
        {
          id,
          text,
          hidden: true,
        },
      ]);
      setText("");
      setId(id + 1);
    }
  }

  function removeTask(currentTodo) {
    const allTodos = todos.slice();
    allTodos.splice(currentTodo, 1);
    setTodos(allTodos);
  }

  function handleTask(currentTodo) {
    const allTodos = todos.slice();
    const currentTask = allTodos[currentTodo].hidden;
    allTodos[currentTodo].hidden = !currentTask;
    setTodos(allTodos);
    setUpdateText("");
  }

  function updateTask(currentTodo) {
    if (verifyInput(inputUpdateTodo.current)) {
      const allTodos = todos.slice();
      allTodos[currentTodo].text = updateText;
      allTodos[currentTodo].hidden = true;
      setTodos(allTodos);
      setUpdateText("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">{props.title}</h1>
      <div className="creatingContainer">
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          ref={inputAddTodo}
          placeholder="type here"
          className="inputAddTodo"
        />
        <button onClick={() => addTask()} className="buttonAddTodo">
          Add Todo
        </button>
      </div>
      <div className="to-dos">
        <ul className="containerList">
          {todos.map((todo, index) => (
            <li key={index} id={todo.id} classname="todo">
              <p>{todo.hidden && todo.text}</p>
              {!todo.hidden && (
                <div className="updateContainer">
                  <input
                    defaultValue={todo.text}
                    onChange={(event) => setUpdateText(event.target.value)}
                    value={updateText}
                    ref={inputUpdateTodo}
                    placeholder="type here"
                    className="inputUpdateTodo"
                  />
                  <button
                    onClick={() => updateTask(index)}
                    className="buttonUpdateTodo"
                  >
                    Update
                  </button>
                </div>
              )}
              <div className="emojis">
                <AiTwotoneDelete
                  className="emoji"
                  onClick={() => removeTask(index)}
                />
                <GrUpdate className="emoji" onClick={() => handleTask(index)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskHook;

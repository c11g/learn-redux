import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { add, LOCAL_STORAGE_KEY } from "../store";
import Todo from "../components/Todo";

function Home({ todos, addTodo }) {
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const [text, setText] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo {...todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToPorps(dispatch) {
  return {
    addTodo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToPorps)(Home);

import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ todos }) {
  const [text, setText] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>{JSON.stringify(todos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

export default connect(mapStateToProps)(Home);

import React from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreator } from "../store";

function Detail({ todos, deleteTodo }) {
  const navigate = useNavigate();
  const { id: _id } = useParams();
  const id = parseInt(_id);
  const todo = todos.find((todo) => todo.id === id);

  const onClick = () => {
    deleteTodo(id);
    navigate("/");
  };

  return (
    <>
      <h1>Detail</h1>
      {todo ? (
        <>
          <h2>{todo.text}</h2>
          <h3>created At: {new Date(id).toString()}</h3>
          <button type="button" onClick={onClick}>
            DELETE
          </button>
        </>
      ) : (
        "404"
      )}
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) => dispatch(actionCreator.deleteAction(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

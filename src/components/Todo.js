import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";

function Todo({ text, id, deleteTodo }) {
  return (
    <div>
      <Link to={`/${id}`}>{text}</Link>
      <button type="button" onClick={() => deleteTodo(id)}>
        DEL
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteTodo: (id) => dispatch(actionCreator.deleteAction(id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);

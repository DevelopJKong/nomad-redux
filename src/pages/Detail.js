import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

function Detail({ toDos }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId));

  return (
    <>
      <p>{toDo?.text}</p>
      <p>Created at: {toDo?.id}</p>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);

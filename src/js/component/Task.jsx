import React, { useState } from "react";

const Task = (props) => {
  const [estado, setEstado] = useState(props.done);
  const [Delete, setDelete] = useState(false);

  const EliminarTodo = (ID) => {
    try {
      fetch(`https://playground.4geeks.com/todo/todos/${ID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const MarcarListo = (Estado, ID) => {
    console.log(Estado);
    const todo = {
      id: props.id,
      is_done: Estado,
      label: props.TodoText,
    };
    try {
      fetch(`https://playground.4geeks.com/todo/todos/${ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
    } catch (error) {
      console.log(error);
    }
    console.log(todo);
  };

  return (
    <div className={Delete === false ? "" : "d-none"}>
      <div className={estado === true ? "opacity-50" : ""}>
        <div
          className={
            props.tema === "dark"
              ? "row border border-white py-3"
              : "row border-bottom border-dark py-3"
          }
        >
          <div
            className="col-md-1 col-1 text-center align-content-center"
            onClick={() => {
              setEstado(estado === false ? true : false);
              MarcarListo(estado, props.id);
            }}
          >
            {estado === true ? (
              <i class="fa-solid fa-circle task task-icon-green text-success"></i>
            ) : (
              <i class="fa-solid fa-circle task task-icon-red text-danger"></i>
            )}
          </div>
          <div className="col-md-1 col-1 text-center ml-2 align-content-center">
            <span className="fw-bold fs-3 mx-2">{props.idWeb}</span>
          </div>
          <div className="col-md-6 col-4 align-content-center text-center fw-bold">
            <p className="mt-2">{props.TodoText}</p>
          </div>
          <div className="col-md-3 col-3 align-content-center text-center fw-bold mt-2">
            <p>Id en el servidor : {props.id}</p>
          </div>
          <div className="col-md-1 col-3 align-content-center text-end">
            <i
              class="fa-solid fa-xmark text-danger fw-bold mx-2 task delete-icon"
              onClick={() => {
                setDelete(true);
                EliminarTodo(props.id);
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

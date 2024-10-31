import React from "react";
import Task from "./Task";

const Main = (props) => {
  return (
    <main
      className={
        props.tema === "dark"
          ? "bg-dark text-white m-0"
          : "bg-white text-dark m-0"
      }
    >
      <div className="container-fluid">
        <div className="row text-center py-3">
          <h2 className="fw-bold text-warning">Tareas</h2>
        </div>
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-10 col-8 p-0 text-end">
              <input
                type="text"
                className={
                  props.tema === "dark"
                    ? "form-control rounded-0 w-100 py-3 rounded-start text-center fw-bold bg-black text-white border border-white"
                    : "form-control rounded-0 w-100 py-3 rounded-start text-center fw-bold task-container-white border border-dark"
                }
                placeholder="Introduce tu tarea aqui!!!"
              />
            </div>
            <div className="col-md-2 col-4 p-0 text-start">
              <button
                className={
                  props.tema === "dark"
                    ? "btn btn-outline-light rounded-0 w-100 py-3 rounded-end text-white border-start-0 boton"
                    : "btn btn-outline-dark rounded-0 w-100 py-3 rounded-end border border-dark border-start-0"
                }
              >
                Subir Tarea
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            props.tema === "dark"
              ? "container task-container-dark border border-white container-task rounded-2"
              : "container task-container-white border border-dark container-task rounded-2"
          }
        >
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </main>
  );
};

export default Main;

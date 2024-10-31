import React, { useRef, useState } from "react";
import Task from "./Task";

const Main = (props) => {
  const [ID, SetID] = useState(1);
  const [TodoTask, SetTodoTask] = useState([]);
  const [Input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleElementoString = (e) => {
    setInput(e.target.value);
  };

  const DateC = () => {
    const CreateDate = new Date();
    return `${CreateDate.getDate()}/${
      CreateDate.getMonth() + 1
    }/${CreateDate.getFullYear()}`;
  };

  const AddTask = (ID, DONE, TASK, DATE) => {
    SetTodoTask([
      ...TodoTask,
      { id: ID, Done: DONE, TaskText: TASK, DateCreate: DATE },
    ]);
    inputRef.current.value = "";
    inputRef.current.placeholder =
      elem === "" ? "Ninguna tarea fue introducida" : "Todo agregado";
  };
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
                onChange={handleElementoString}
                ref={inputRef}
              />
            </div>
            <div className="col-md-2 col-4 p-0 text-start">
              <button
                className={
                  props.tema === "dark"
                    ? "btn btn-outline-light rounded-0 w-100 py-3 rounded-end text-white border-start-0 boton"
                    : "btn btn-outline-dark rounded-0 w-100 py-3 rounded-end border border-dark border-start-0"
                }
                onClick={() => {
                  AddTask(ID, false, Input, DateC());
                  SetID(ID + 1);
                }}
                d
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
          {TodoTask.map((elem) => {
            return (
              <Task
                done={elem.Done}
                id={elem.id}
                TodoText={elem.TaskText}
                date={elem.DateCreate}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;

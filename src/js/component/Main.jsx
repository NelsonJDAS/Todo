import React, { useEffect, useRef, useState } from "react";
import Task from "./Task";
import { Toaster, toast } from "sonner";

const Main = (props) => {
  const [Id, SetId] = useState(0);
  const [TodoTask, SetTodoTask] = useState([]);
  const [Input, setInput] = useState("");
  const inputRef = useRef(null);
  const usuario = "usuario";

  useEffect(() => {
    try {
      AgregarTodos(usuario);
    } catch (error) {
      console.log(error);
    }
  }),
    [Main];

  const EventKey = (event) => {
    return event.key === "Enter" ? AddTask(Id, false, Input) : "";
  };

  const handleElementoString = (e) => {
    setInput(e.target.value);
  };

  //crear el usuario
  async function CrearUsuario(nombre) {
    const usuario = {
      name: nombre,
      id: 250,
    };
    try {
      const respuesta = fetch(
        `https://playground.4geeks.com/todo/users/${nombre}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );
      if (respuesta.ok) {
        const usuario = await respuesta.json();
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  }

  // restricciones y agregar la tarea al servidor
  const AddTask = (ID, DONE, TASK) => {
    const valor = TASK.replace(/ /g, "") === "" ? TASK.replace(/ /g, "") : TASK;
    inputRef.current.value = "";
    inputRef.current.placeholder = valor === "" ? "Invalid Todo" : "Todo Added";

    valor === ""
      ? ""
      : CrearTodoDB(
          {
            id: ID,
            is_done: DONE,
            label: TASK,
          },
          usuario
        );

    valor === "" ? toast.error("Valor Invalido") : toast(`Task ${TASK} added`);

    setInput("");
  };

  //agregar la tarea a al servidor
  async function CrearTodoDB(todo, usuario) {
    const task = {
      id: todo.id,
      label: todo.label,
      is_done: todo.is_done,
    };
    try {
      const respuesta = await fetch(
        `https://playground.4geeks.com/todo/todos/${usuario}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        }
      );
      if (respuesta.ok) {
        const datos = await respuesta.json(task);
        console.log("TodoAgregado");
      } else {
        console.error("Error al subir el todo a la DB");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function AgregarTodos(usuario) {
    try {
      const respuesta = fetch(
        `https://playground.4geeks.com/todo/users/${usuario}`
      )
        .then(async (respuesta) => {
          if (respuesta.ok) {
            const usuario = await respuesta.json();
            return usuario;
          } else {
          }
        })
        .then(async (datos) => {
          const todo = await datos.todos;
          SetTodoTask(todo);
        });
    } catch (error) {
      console.error(error);
    }
  }

  //funcionalidad quitada
  // cons () => {
  //   const CreateDate = new Date();
  //   return `${CreateDate.getDate()}/${
  //     CreateDate.getMonth() + 1
  //   }/${CreateDate.getFullYear()}`;
  // };

  return (
    <main
      className={
        props.tema === "dark"
          ? "bg-dark text-white m-0"
          : "bg-white text-dark m-0"
      }
    >
      <Toaster richColors position="top-center" />
      <div className="container-fluid">
        <div className="row text-center py-3">
          <h2 className="fw-bold text-warning">TASK</h2>
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
                placeholder="Put your task here!!!"
                onChange={handleElementoString}
                ref={inputRef}
                onKeyDown={EventKey}
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
                  AddTask(Id, false, Input);
                }}
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
                done={elem.is_done}
                id={elem.id}
                TodoText={elem.label}
                idWeb={TodoTask[0].id - 1}
                tema={props.tema}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;

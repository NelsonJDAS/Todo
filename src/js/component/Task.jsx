import React from "react";

const Task = () => {
  const FechaDeCreacion = new Date();

  return (
    <div className="row border border-white py-3">
      <div className="col-md-1 col-1 text-center align-content-center">
        <i class="fa-regular fa-circle task "></i>
      </div>
      <div className="col-md-1 col-1 text-center ml-2 align-content-center">
        <span className="fw-bold fs-3 mx-2">1</span>
      </div>
      <div className="col-md-6 col-4 align-content-center text-center">
        <p>tarea de prueba aaaaaaaaa</p>
      </div>
      <div className="col-md-3 col-3 align-content-center text-center">
        <p>creador el 00/00/2000</p>
      </div>
      <div className="col-md-1 col-3 align-content-center text-end">
        <i class="fa-solid fa-xmark text-danger fw-bold mx-2 task"></i>
      </div>
    </div>
  );
};

export default Task;

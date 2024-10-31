import React from "react";

const Task = (props) => {
  return (
    <div className="row border border-white py-3">
      <div className="col-md-1 col-1 text-center align-content-center">
        <i class="fa-regular fa-circle task "></i>
      </div>
      <div className="col-md-1 col-1 text-center ml-2 align-content-center">
        <span className="fw-bold fs-3 mx-2">{props.id}</span>
      </div>
      <div className="col-md-6 col-4 align-content-center text-center">
        <p>{props.TodoText}</p>
      </div>
      <div className="col-md-3 col-3 align-content-center text-center">
        <p>{props.date}</p>
      </div>
      <div className="col-md-1 col-3 align-content-center text-end">
        <i class="fa-solid fa-xmark text-danger fw-bold mx-2 task"></i>
      </div>
    </div>
  );
};

export default Task;

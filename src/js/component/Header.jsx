import React, { useState } from "react";

const Header = (props) => {
  return (
    <div
      className={
        props.tema === "dark"
          ? "row pt-3 bg-black text-white border-bottom border-3 border-white m-0"
          : "row pt-3 background text-white border-bottom border-3 border-dark m-0"
      }
    >
      <div className="col-6 col-md-8 col-lg-10 fw-bold fs-1">
        <h1
          className={
            props.tema === "dark" ? "fs-1 mx-3" : "fs-1 mx-3 text-black"
          }
        >
          Todo<span className="text-warning">.List</span>
        </h1>
      </div>
      <div className="col-md-4 col-lg-2 col-6 text-end pb-3">
        <div className="mx-2">
          <button
            className="btn fw-bold m-0 p-0"
            onClick={() => {
              props.setTema("dark");
            }}
          >
            <i
              class={
                props.tema === "dark"
                  ? "fa-regular fa-moon selected-dark px-3 border border-white text-white border-end-1 mx-2"
                  : "fa-regular fa-moon selected-dark px-3 border border-dark mx-2"
              }
            ></i>
          </button>
          <button
            className="btn fw-bold m-0 p-0"
            onClick={() => {
              props.setTema("white");
            }}
          >
            <i
              class={
                props.tema === "white"
                  ? "fa-regular fa-sun text-white selected-white px-3 border border-dark"
                  : "fa-regular fa-sun text-white selected-white px-3 border border-white"
              }
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

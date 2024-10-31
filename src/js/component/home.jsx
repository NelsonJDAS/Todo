import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header";

//create your first component
const Home = () => {
  const [tema, setTema] = useState("dark");
  return (
    <>
      <Header tema={tema} setTema={setTema} />
      <div
        className={
          tema === "dark" ? "bg-dark text-white" : "bg-white text-dark"
        }
      >
        <div className="container-fluid">
          <div className="row text-center">
            <h2 className="fw-bold text-warning">Tareas</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-2">
                <span>1</span>
              </div>
              <div className="col-4">
                <p>tarea de prueba aaaaaaaaaa</p>
              </div>
              <div className="col-4">
                <p>creador el 00/ 00/ 00/</p>
              </div>
              <div className="col-2">
                <i class="fa-solid fa-xmark text-danger fw-bold"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

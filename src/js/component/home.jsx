import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//create your first component
const Home = () => {
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

  useEffect(() => {
    try {
      CrearUsuario("usuario");
    } catch (error) {
      console.log(error);
    }
  }),
    [];

  const [tema, setTema] = useState("dark");
  return (
    <>
      <Header tema={tema} setTema={setTema} />
      <Main tema={tema} />
      <Footer tema={tema} />
    </>
  );
};

export default Home;

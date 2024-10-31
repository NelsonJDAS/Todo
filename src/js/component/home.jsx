import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//create your first component
const Home = () => {
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

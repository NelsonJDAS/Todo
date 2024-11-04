import React from "react";

const Footer = (props) => {
  return (
    <footer
      className={
        props.tema === "dark"
          ? "py-2 bg-black text-white border-3 border-top border-white m-0"
          : "py-2 background border-3 border-top border-dark text-dark border-3 border-top border-dark m-0"
      }
    >
      <div className="row mt-2 m-0 p-0">
        <div className="col-md-6 col-12 text-center">
          <p>
            Created By
            <span className="fw-bold"> Nelson De Abreu</span>
          </p>
        </div>
        <div className="col-md-6 col-12 text-center fw-bold">
          <p>
            Contact
            <a
              href="https://www.linkedin.com/in/nelson-de-abreu-ab87042b6/"
              className="text-primary text-decoration-none px-1"
              target="_blank"
            >
              Linkedin
            </a>
            -
            <a
              href="https://github.com/NelsonJDAS"
              className="text-warning text-decoration-none px-1"
              target="_blak"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col-12 text-center">
          <p className="fw-bold">Website for educational purposes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

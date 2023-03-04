import React from "react";
import imagen from "../img/M.I._Forja_logo.png";
const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="historia">
        <h2> Historia</h2>
        <p>Blablabla</p>
      </div>
      <div className="staff">
        <h2> Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src={imagen} width="250px" alt="Imagen de M.I Forja"></img>
            <h2>Nombre y apellido</h2>
            <div> informacionn</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;

import React from "react";
import imagen from "../../img/M.I._Forja_logo.png";
import "../../styles/components/layout/Header.css";
const Header = (props) => {
  return (
    <div className="holder">
      <img src={imagen} width="250px" alt="Imagen de M.I Forja"></img>
    </div>
  );
};

export default Header;

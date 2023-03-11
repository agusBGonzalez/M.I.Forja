import React from "react";
import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/novedades">Novedades</Link>
          </li>
          <li> Cuchillos</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

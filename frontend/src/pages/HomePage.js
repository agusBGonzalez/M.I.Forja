import React from "react";
import Section from "../components/widgets/Section";
import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
  // definir los elementos para cada sección
  const forjaItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  const otraItems = ["Item A", "Item B", "Item C", "Item D", "Item E", "Item F"];

  return (
    <main className="holder">
      <div className="homeimg"></div>
      <div className="columnas">
        <div className="bienvenidos">lorem</div>

        {/* Sección de forja */}
        <Section numRows={2} numCols={3} />

        {/* Sección de otra cosa */}
        <Section numRows={2} numCols={3} />
      </div>
    </main>
  );
};

export default HomePage;

import React from "react";
import Section from "../components/widgets/Section";

const HomePage = (props) => {
  // definir los elementos para cada sección
  const elements = [
    [
      "https://slideplayer.es/106369/1/images/slide_1.jpg",
      "Descripción de la imagen 1",
    ],
    [
      "https://slideplayer.es/106369/1/images/slide_1.jpg",
      "Descripción de la imagen 2",
    ],
    [
      "https://slideplayer.es/106369/1/images/slide_1.jpg",
      "Descripción de la imagen 3",
    ],
    [
      "https://slideplayer.es/106369/1/images/slide_1.jpg",
      "Descripción de la imagen 4",
    ],
    [
      "https://slideplayer.es/106369/1/images/slide_1.jpg",
      "Descripción de la imagen 5",
    ],
    [
      "https://slideplayer.es/106369/1/images/slide_1.jpg",
      "Descripción de la imagen 6",
    ],
  ];
  return (
    <main className="holder">
      <div>
        {/* Ejemplo de sección de 2 filas y 3 columnas */}
        <Section
          name={"Patrones Damasco"}
          numRows={3}
          numCols={3}
          elements={elements}
        />
        {/* Ejemplo de sección de 4 filas y 7 columnas */}
        <Section
          name={"Hojas de Cuchillos"}
          numRows={3}
          numCols={3}
          elements={elements}
        />
      </div>
    </main>
  );
};

export default HomePage;

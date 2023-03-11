import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/components/pages/HomePage.css";

const Section = ({ name, numRows, numCols, elements }) => {
  // Generamos una matriz de contenido para mostrar en la sección
  const content = [...Array(numRows)].map(() => Array(numCols).fill(null));
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      content[i][j] = elements[i * numCols + j] || null;
    }
  }
  return (
    <Container className="section-container">
      <Row>
        <Col>
          <h2>{name}</h2>
        </Col>
      </Row>
      {/* Usamos un bucle para generar las filas y columnas según el número especificado */}
      {content.map((row, rowIndex) => (
        <Row key={rowIndex} style={{ display: "flex", flexWrap: "wrap" }}>
          {row.map((col, colIndex) => (
            <Col key={colIndex} style={{ width: `${100 / numCols}%` }}>
              {col && (
                <div className="image-with-text">
                  <img src={col[0]} alt={col[1]} />
                  <p>{col[1]}</p>
                </div>
              )}
            </Col>
          ))}
        </Row>
      ))}
      <Row>
        <Col>
          <Button variant="primary" href="#">
            Ver más
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;

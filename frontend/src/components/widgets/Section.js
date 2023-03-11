import React, { useState } from "react";

import { Container, Row, Col, Button } from 'react-bootstrap';
const Section = ({ numRows, numCols }) => {
  // Generamos una matriz de contenido para mostrar en la sección
  const content = [...Array(numRows)].map(() => Array(numCols).fill('Contenido de la sección'));
  
  return (
    <Container>
      <Row>
        <Col>
          <h2>Sección</h2>
        </Col>
      </Row>
      {/* Usamos un bucle para generar las filas y columnas según el número especificado */}
      {content.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((col, colIndex) => (
            <Col key={colIndex}>
              <p>{col}</p>
            </Col>
          ))}
        </Row>
      ))}
      <Row>
        <Col>
          <Button variant="primary" href="#">Ver más</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
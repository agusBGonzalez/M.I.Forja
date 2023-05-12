const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta principal del administrador
router.get('/', (req, res) => {
  // Renderizar la vista del administrador con una lista de elementos
  const items = ['patrones', 'hojas']; // Nombres descriptivos de los archivos
  res.render('admin/index', { items });
});

// Ruta para los elementos individuales
router.get('/item/:itemName', (req, res) => {
  const itemName = req.params.itemName;
  // Realizar acciones específicas para cada elemento según el nombre del archivo
  // ...
  // Renderizar la vista correspondiente al elemento individual
  res.render('admin/item', { itemName });
});

module.exports = router;
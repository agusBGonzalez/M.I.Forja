const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para los elementos individuales
router.get('/:itemName', (req, res) => {
  const itemName = req.params.itemName;
  const columnNames = ['Descripcion', 'Titulo']
  res.render(`admin/crud`, { itemName, columnNames }); // Utiliza comillas invertidas (backticks) aquí
});

module.exports = router;

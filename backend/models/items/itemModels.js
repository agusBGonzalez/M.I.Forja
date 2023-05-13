// itemModels.js

// Objeto para almacenar los modelos de elementos
const itemModels = {};

// Carga los modelos de elementos
function loadItemModels() {
  // Carga dinámica de modelos de elementos
  const hojasModel = require('./hojas');
  const patronesModel = require('./patrones');

  // Asigna los modelos al objeto itemModels
  itemModels['hojas'] = hojasModel;
  itemModels['patrones'] = patronesModel;
}

// Cargar los modelos de elementos al iniciar la aplicación
loadItemModels();

module.exports = itemModels;

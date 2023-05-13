const express = require('express');
const path = require('path');
const router = express.Router();
const itemModels = require('../../models/items/itemModels');

// Ruta para los elementos individuales
router.get('/:itemName', (req, res) => {
    const itemName = req.params.itemName;

    // Verificar si el modelo del elemento existe
    if (itemModels.hasOwnProperty(itemName)) {
        // Importar el modelo del elemento dinámicamente
        const itemModel = itemModels[itemName];

        itemModel.getItems()
            .then((items) => {
                const columnNames = ['id', 'imagen', 'descripcion', 'titulo'];
                 res.render('admin/crud', { itemName, columnNames, items });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send(`Error al obtener los elementos de ${itemName} desde la base de datos`);
            });
    } else {
        res.status(404).send('Elemento no encontrado');
    }
});

// Ruta para eliminar un elemento
router.post('/:itemName/delete/:itemId', (req, res) => {
    const itemName = req.params.itemName;
    const itemId = req.params.itemId;
    console.log('estoy ene le eliminar');
    // Verificar si el modelo del elemento existe
    if (itemModels.hasOwnProperty(itemName)) {
        // Importar el modelo del elemento dinámicamente
        const itemModel = itemModels[itemName];

       
        itemModel.removeItems(itemId)
            .then(() => {
                res.redirect(`/admin/item/${itemName}`);
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send(`Error al eliminar el elemento ${itemId} de ${itemName} desde la base de datos`);
            });
    } else {
        res.status(404).send('Elemento no encontrado');
    }
});
module.exports = router;

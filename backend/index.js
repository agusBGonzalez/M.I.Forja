const hojasModel = require("./models/items/hojas");
const patronesModel = require("./models/items/patrones");

async function testModels() {
  try {
    // Insertar registros de prueba en la tabla de hojas
    const newHoja1 = {
      imagen: "imagen1.png",
      descripcion: "Descripción de la hoja 1",
      titulo: "Título de la hoja 1",
    };
    const insertedHojaId1 = await hojasModel.insertHoja(newHoja1);
    console.log("ID de la hoja insertada 1:", insertedHojaId1);

    const newHoja2 = {
      imagen: "imagen2.png",
      descripcion: "Descripción de la hoja 2",
      titulo: "Título de la hoja 2",
    };
    const insertedHojaId2 = await hojasModel.insertHoja(newHoja2);
    console.log("ID de la hoja insertada 2:", insertedHojaId2);

    // Insertar registros de prueba en la tabla de patrones
    const newPatron1 = {
      imagen: "patron1.png",
      descripcion: "Descripción del patrón 1",
      titulo: "Título del patrón 1",
    };
    const insertedPatronId1 = await patronesModel.insertPatron(newPatron1);
    console.log("ID del patrón insertado 1:", insertedPatronId1);

    const newPatron2 = {
      imagen: "patron2.png",
      descripcion: "Descripción del patrón 2",
      titulo: "Título del patrón 2",
    };
    const insertedPatronId2 = await patronesModel.insertPatron(newPatron2);
    console.log("ID del patrón insertado 2:", insertedPatronId2);
    
    
    var getItemsPatron= await patronesModel.getItems(newPatron2);
    console.log("Despues del  "+getItemsPatron);
    // ... Resto del código para probar las funciones de obtención, actualización y eliminación
  } catch (error) {
    console.log(error);
  }
}

testModels();

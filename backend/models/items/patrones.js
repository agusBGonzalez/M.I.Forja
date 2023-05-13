const query = require("../query");

async function getItems() {
  const result = await query.getAll("patrones");
  return result;
}

async function insertItems(data) {
  const success = await query.insert("patrones", data);
  return success;
}

async function getItemsById(id) {
  const result = await query.getById("patrones", id);
  return result;
}

async function updateItems(id, patron) {
  const success = await query.update("patrones", id, patron);
  return success;
}

async function removeItems(id) {
  const success = await query.remove("patrones", id);
  return success;
}

module.exports = {
  getItems: getItems,
  insertItems: insertItems,
  getItemsById: getItemsById,
  updateItems: updateItems,
  removeItems: removeItems,
};

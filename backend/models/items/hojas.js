const query = require("../query");

/**
 * @returns {Promise<Array<Hojas>>}
 */
async function getItems() {
  const result = await query.getAll("hojas");
  return result;
}

async function insertItems(data) {
  const success = await query.insert("hojas", data);
  return success;
}

async function getItemsById(id) {
  const result = await query.getById("hojas", id);
  return result;
}

async function updateItems(id, patron) {
  const success = await query.update("hojas", id, patron);
  return success;
}

async function removeItems(id) {
  const success = await query.remove("hojas", id);
  return success;
}

module.exports = {
  getItems,
  insertItems,
  getItemsById,
  updateItems,
  removeItems,
};

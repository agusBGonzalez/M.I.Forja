const query = require("./query");

/**
 * @returns {Promise<Array<Hojas>>}
 */
async function getHojas() {
  const result = await query.getAll("hojas");
  return result;
}

async function insertHoja(data) {
  const success = await query.insert("hojas", data);
  return success;
}

async function getHojaById(id) {
  const result = await query.getById("hojas", id);
  return result;
}

async function updateHoja(id, patron) {
  const success = await query.update("hojas", id, patron);
  return success;
}

async function removeHoja(id) {
  const success = await query.remove("hojas", id);
  return success;
}

module.exports = {
  getHojas,
  insertHoja,
  getHojaById,
  updateHoja,
  removeHoja,
};

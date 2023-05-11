const query = require("./query");

async function getPatrones() {
  const result = await query.getAll("patrones");
  return result;
}
async function insertPatron(data) {
  const success = await query.insert("patrones",data);
  return success;
}
async function getPatronById(id) {
  const result = await query.getById("patrones", id);
  return result;
}

async function updatePatron(id, patron) {
  const success = await query.update("patrones", id, patron);
  return success;
}

async function removePatron(id) {
  const success = await query.remove("patrones", id);
  return success;
}

module.exports = {
  getPatrones,
  insertPatron,
  getPatronById,
  updatePatron,
  removePatron,
};

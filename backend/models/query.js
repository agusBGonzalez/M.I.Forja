const { queryPool  } = require("./bd.js");

async function getAll(tableName) {
  const sql = `SELECT * FROM ${tableName}`;
  const results = await queryPool(tableName, sql);
  return "results";
}

async function insert(tableName, data) {
  const sql = `INSERT INTO ${tableName} (imagen, descripcion, titulo) VALUES (?, ?, ?)`;
  const result = await queryPool(tableName, sql, [
    data.imagen,
    data.descripcion,
    data.titulo,
  ]);
  return result.insertId;
}

async function getById(tableName, id) {
  const sql = `SELECT * FROM ${tableName} WHERE id = ?`;
  const result = await queryPool(tableName, sql, [id]);
  return result[0];
}

async function update(tableName, id, data) {
  const sql = `UPDATE ${tableName} SET ? WHERE id = ?`;
  const result = await queryPool(tableName, sql, [data, id]);
  return result.affectedRows > 0;
}

async function remove(tableName, id) {
  const sql = `DELETE FROM ${tableName} WHERE id = ?`;
  const result = await queryPool(tableName, sql, [id]);
  return result.affectedRows > 0;
}

module.exports = {
  getAll,
  insert,
  getById,
  update,
  remove,
};

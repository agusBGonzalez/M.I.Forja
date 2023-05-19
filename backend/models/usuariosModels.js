const { queryPool } = require("./bd");
const md5 = require("md5");

async function getUserByUsernameAndPassword(user, password) {
  try {
    const tableName = "usuarios";
    const query = "SELECT * FROM $TABLE_NAME$ WHERE usuario = ? AND password = ? LIMIT 1";
    const rows = await queryPool(tableName, query, [user, md5(password)]);
    return rows[0];
  } catch (e) {
    throw e;
  }
}
async function testQuery() {
  try {
    const usuario = "Admin"; // Reemplaza con un nombre de usuario existente en tu base de datos
    const password = "Admin"; // Reemplaza con una contraseña existente en tu base de datos
    const data = await getUserByUsernameAndPassword(usuario, password);
  } catch (error) {
    console.log(error);
  }
}
testQuery();

module.exports = { getUserByUsernameAndPassword };

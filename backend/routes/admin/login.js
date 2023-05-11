const express = require("express");
const router = express.Router();
const usuariosModel = require("./../../models/usuariosModels");

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    var usuario = req.body.username;
    console.log('Usuario' + usuario);
    var password = req.body.password;
    console.log('password' + password);
    var data = await usuariosModel.getUserByUsernameAndPassword(
      usuario,
      password
    );

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect("/admin/novedades");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/", function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

module.exports = router;
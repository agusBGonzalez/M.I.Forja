const express = require("express");
const router = express.Router();

router.get("/seccion1", (req, res) => {
  res.render("admin/seccion1");
});

router.get("/seccion2", (req, res) => {
  res.render("admin/seccion2");
});

module.exports = router;
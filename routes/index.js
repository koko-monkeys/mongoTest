const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/game", (req, res) => {
  res.html(path.join(__dirname, "../public/index.html"));
});


module.exports = router;
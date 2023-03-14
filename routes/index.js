const express = require("express");
const router = express.Router();

router.get("/game", (req, res) => {
  res.sand(path.join(__dirname, "../public/index.html"));
});


module.exports = router;
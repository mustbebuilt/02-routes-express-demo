const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  return res.send("<p>test</p>");
});

module.exports = router;

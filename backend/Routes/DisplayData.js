const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.FoodItems , global.FoodCategory]);
  } catch (error) {
    console.log(error);
    res.send("Server Error");
  }
});

module.exports = router;

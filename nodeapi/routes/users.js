const express = require("express");
const router = express.Router();
const {setUser,getUser} = require("../handlers/users");

router.post("/users", setUser);
router.get("/users/:id", getUser);

module.exports = router;
//rotas para ser consumida no frontend
const express = require("express");
const { toGet, createUser } = require("../controller/userController");
const router = express.Router();

// router.post("/users", createUser );
router.post("/users", createUser);
router.get("/users", toGet);

module.exports = router;

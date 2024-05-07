//rotas para ser consumida no frontend
const express = require("express");
const { createUser, toGet } = require("../controller/UserController");
const createList = require("../controller/ListController");
const router = express.Router();

// router.post("/users", createUser );
router.post("/users", createUser);
router.get("/users", toGet);
router.post("/list", createList);

module.exports = router;

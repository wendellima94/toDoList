//rotas para ser consumida no frontend
const express = require("express");
// const createUser = require("../controller/userController");
const toGet = require("../controller/userController");
const router = express.Router();


// router.post("/users", createUser );
router.get("/users1", toGet);

module.exports = router ;



const express = require("express");
const router = express.Router();
const path = require("path");
const apiUserController = require("../../controllers/apiController/apiUserController");



router.get("/", apiUserController.listUsers);
/*
router.get("/search", apiUserController.searchUsers);
router.get("/:id", apiUserController.UserId)
router.post("/", apiUserController.storeUser);


router.put("/update/:id");*/

module.exports = router